import sqlite3
from scraper import scrapeStocks
con = sqlite3.connect("")
cursor = con.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS  StockTransactions (
    Politician TEXT,
    Stocks TEXT,
    BuyOrSell TEXT,
    SizeOf INTEGER,
    PriceOfStock REAL,
    DateBought TEXT,
    DatePublished TEXT
    )
""")

def checkExisting(transaction):
    cursor.execute("""
        SELECT COUNT(*) FROM StockTransactions 
        WHERE Politician=:politician AND Stocks=:stocks AND BuyOrSell=:buyOrSell AND SizeOf=:sizeOf AND PriceOfStock=:priceOfStock AND DateBought=:dateBought AND DatePublished=:datePublished
    """, transaction)
    count = cursor.fetchone()[0]
    return count > 0

stockTransaction = scrapeStocks()
for stock in stockTransaction:
    checkExisting(stock)
    cursor.execute("INSERT INTO StockTransactions (politician, Stocks, BuyOrSell, SizeOf, PriceOfStock, DateBought, DatePublished) VALUES (:politician, :stocks, :buyOrSell, :sizeOf, :priceOfStock, :dateBought, :datePublished)", stock)

con.commit()
cursor.close()
con.close()