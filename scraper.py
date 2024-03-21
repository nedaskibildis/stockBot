from selenium import webdriver
from bs4 import BeautifulSoup
import datetime

def scrapeStocks():
    url = "https://www.capitoltrades.com/trades?txDate=30d&per_page=96#"
    options = webdriver.ChromeOptions()
    options.add_argument('--incognito')
    options.add_argument('--headless')

    driver = webdriver.Chrome(options=options)
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