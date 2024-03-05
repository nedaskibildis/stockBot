from selenium import webdriver
from bs4 import BeautifulSoup


url = "https://www.capitoltrades.com/trades?txDate=30d&per_page=96#"
options = webdriver.ChromeOptions()
# options.add_argument('--incognito')
# options.add_argument('--headless')

driver = webdriver.Chrome(options=options)
driver.get(url)
driver.implicitly_wait(10)

soup = BeautifulSoup(driver.page_source, 'html.parser')

politician = []
stocks = []
dateBought = []
datePublished = []
buyOrSell = []
sizeOf = []
priceOfStock = []

for element in soup.find_all('tr', class_='q-tr'):
    for stock in element.find_all('td', class_='q-column--issuer'):   
        stocks.append(stock.find('h3').text)
    for name in element.find_all('td', class_='q-column--politician'):   
        politician.append(name.find('h3').text)
    for txType in element.find_all('td', class_='q-column--txType'):   
        buyOrSell.append(txType.find('span').text)
    for day in element.find_all('td', class_='q-column--txDate'):
         year = str(day.find('div', class_='q-label').text)
         date = str(day.find('div', class_='q-value').text)
         fullDate = year + date
         dateBought.append(fullDate)
    for value in element.find_all('td', class_='q-column--value'):   
        sizeOf.append(value.find('span').text)
    for price in element.find_all('td', class_='q-column--price'):   
        priceOfStock.append(price.find('span').text)
    for datePub in element.find_all('td', class_='q-column--pubDate'):
        year = str(datePub.find('div', class_='q-label').text)
        date = str(datePub.find('div', class_='q-value').text)
        pubDate = year + date
        datePublished.append(pubDate)

for i in range(len(politician)):
    print(f'{politician[i]} {buyOrSell[i]} {sizeOf[i]} of {stocks[i]} on {dateBought[i]} at a price of {priceOfStock[i]}, and published this filing on {datePublished[i]}')