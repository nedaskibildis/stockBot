import mariadb
import sys
import os
import time
from dotenv import load_dotenv
from selenium import webdriver
from bs4 import BeautifulSoup
import datetime

def scrapeStocks():
    serverURL = "http://selenium:4444/wd/hub"
    url = "https://www.capitoltrades.com/trades?txDate=30d&per_page=96#"
    options = webdriver.ChromeOptions()
    options.add_argument('--incognito')
    options.add_argument('--headless')

    driver = webdriver.Remote(command_executor=serverURL ,options=options)
    driver.get(url)
    driver.implicitly_wait(10)

    soup = BeautifulSoup(driver.page_source, 'html.parser')

    transactions = []

    for element in soup.find_all('tr', class_='q-tr'):
        transaction = {}

        politician_elem = element.find('td', class_='q-column--politician')
        if politician_elem:
            transaction['politician'] = politician_elem.find('h3').text
        else:
            continue

        transaction['stocks'] = element.find('td', class_='q-column--issuer').find('h3').text
        transaction['buyOrSell'] = element.find('td', class_='q-column--txType').find('span').text
        transaction['sizeOf'] = element.find('td', class_='q-column--value').find('span').text
        transaction['priceOfStock'] = element.find('td', class_='q-column--price').find('span').text
        
        if transaction['priceOfStock'] == 'N/A':
            continue

        dateBought_info = element.find('td', class_='q-column--txDate')
        dateBought_year = dateBought_info.find('div', class_='q-label').text
        dateBought_date = dateBought_info.find('div', class_='q-value').text
        transaction['dateBought'] = dateBought_year + dateBought_date

        datePublished_info = element.find('td', class_='q-column--pubDate')
        datePublished_year = datePublished_info.find('div', class_='q-label').text
        datePublished_date = datePublished_info.find('div', class_='q-value').text
        if datePublished_year == "Today":
            transaction['datePublished'] = datetime.datetime.now().strftime("%Y %d %b")
        elif datePublished_year == "Yesterday":
            yesterday = datetime.datetime.now() - datetime.timedelta(days=1)
            transaction['datePublished'] = datetime.datetime.now().strftime("%Y %d %b")
        else:
            transaction['datePublished'] = datePublished_year + datePublished_date

        transactions.append(transaction)
    driver.quit()
    return transactions

def connectToDb():
    retries = 5
    delay = 5
    while retries > 0:
        try:
            conn = mariadb.connect(
                user=os.getenv('DB_USER'),
                password=os.getenv('DB_PASSWORD'),
                host=os.getenv('DB_ADDRESS'),
                port=3306,
                database=os.getenv('DB_DATABASE')
            )
            return conn.cursor()
        except mariadb.Error as e:
            print(f"Error Connecting To MariaDB Platform: {e}")
            retries -= 1
            print(f"Retrying in {delay} seconds...")
            time.sleep(delay)
    print("Failed to connect to the database after multiple retries.")
    sys.exit(1)

def checkExisting(transaction, cursor):
    cursor.execute("""
        SELECT COUNT(*) FROM StockTransactions 
        WHERE Politician=? AND Stocks=? AND BuyOrSell=? AND SizeOf=? AND PriceOfStock=? AND DateBought=? AND DatePublished=?
    """, (transaction['politician'], transaction['stocks'], transaction['buyOrSell'], transaction['sizeOf'], transaction['priceOfStock'], transaction['dateBought'], transaction['datePublished']))
    count = cursor.fetchone()[0]
    return count > 0

def pushStocks(cursor, stocks: dict):
    print('In Stocks')
    print(stocks)
    for stock in stocks:
        print(stock['sizeOf'])
        if not checkExisting(stock, cursor):
            print('Pushed Stock')
            cursor.execute("INSERT INTO StockTransactions (Politician, Stocks, BuyOrSell, SizeOf, PriceOfStock, DateBought, DatePublished) VALUES (?, ?, ?, ?, ?, ?, ?)", (stock['politician'], stock['stocks'], stock['buyOrSell'], stock['sizeOf'], stock['priceOfStock'], stock['dateBought'], stock['datePublished']))
        else:
            print("Copy Found")


cursor = connectToDb()
stocks = scrapeStocks()
pushStocks(cursor, stocks)
cursor.execute("""
    SELECT * FROM StockTransactions
    """)

rows = cursor.fetchall()
for row in rows:
    print(row)
    
cursor.close()

