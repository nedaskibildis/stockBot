from selenium import webdriver
from bs4 import BeautifulSoup

# Url for site that hosts information
url = "https://www.capitoltrades.com/trades?txDate=30d&per_page=96#"
# Chrome options
options = webdriver.ChromeOptions()
options.add_argument('--incognito')
options.add_argument('--headless')

# Get Driver and wait to make sure data is loaded
driver = webdriver.Chrome(options=options)
driver.get(url)
driver.implicitly_wait(10)

# Load beautiful soup for the page to get html content
soup = BeautifulSoup(driver.page_source, 'html.parser')

# Setup arrays to append information to, probably should find a better way to do this
politician = []
stocks = []
dateBought = []
datePublished = []
buyOrSell = []
sizeOf = []
priceOfStock = []

# Loop to find each element in the table, one table row is one stock bought
for element in soup.find_all('tr', class_='q-tr'):
    for stock in element.find_all('td', class_='q-column--issuer'): #Find what stock was bought
        stocks.append(stock.find('h3').text)
    for name in element.find_all('td', class_='q-column--politician'):   #Find politician who bought it
        politician.append(name.find('h3').text)
    for txType in element.find_all('td', class_='q-column--txType'):   #Buy or sell 
        buyOrSell.append(txType.find('span').text)
    for day in element.find_all('td', class_='q-column--txDate'): #When did they buy it
         year = str(day.find('div', class_='q-label').text)
         date = str(day.find('div', class_='q-value').text)
         fullDate = year + date
         dateBought.append(fullDate)
    for value in element.find_all('td', class_='q-column--value'):   #how much did they buy
        sizeOf.append(value.find('span').text)
    for price in element.find_all('td', class_='q-column--price'):   #How much did the stock cost
        priceOfStock.append(price.find('span').text)
    for datePub in element.find_all('td', class_='q-column--pubDate'): # When did they post the transaction
        year = str(datePub.find('div', class_='q-label').text)
        date = str(datePub.find('div', class_='q-value').text)
        pubDate = year + date
        datePublished.append(pubDate)

# Loop to print to make sure everything is being scraped properly
for i in range(len(politician)):
    print(f'{politician[i]} {buyOrSell[i]} {sizeOf[i]} of {stocks[i]} on {dateBought[i]} at a price of {priceOfStock[i]}, and published this filing on {datePublished[i]}')