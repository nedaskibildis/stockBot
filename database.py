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

stockTransaction = scrapeStocks()
for stock in stockTransaction:
    cursor.execute("INSERT INTO StockTransactions (politician, Stocks, BuyOrSell, SizeOf, PriceOfStock, DateBought, DatePublished) VALUES (:politician, :stocks, :buyOrSell, :sizeOf, :priceOfStock, :dateBought, :datePublished)", stock)

cursor.execute("SELECT * FROM StockTransactions LIMIT 10")
rows = cursor.fetchall()

if rows:
    print("Data found in 'StockTransactions':")
    for row in rows:
        print(row)

con.commit()
cursor.close()
con.close()