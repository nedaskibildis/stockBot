import sqlite3
from scraper import scrapeStocks

def setupDb(dropFirst = False):
    con = sqlite3.connect("discordBot.db")
    cursor = con.cursor()
    if dropFirst:
        cursor.execute("DROP TABLE IF EXISTS {}".format('StockTransactions'))
    
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

def pullStocks():
    con = sqlite3.connect("discordBot.db")
    cursor = con.cursor()
    stockTransaction = scrapeStocks()
    for stock in stockTransaction:
        if not checkExisting(stock):
            cursor.execute("INSERT INTO StockTransactions (politician, Stocks, BuyOrSell, SizeOf, PriceOfStock, DateBought, DatePublished) VALUES (:politician, :stocks, :buyOrSell, :sizeOf, :priceOfStock, :dateBought, :datePublished)", stock)

    con.commit()
    cursor.close()
    con.close()

def checkExisting(transaction):
    con = sqlite3.connect("discordBot.db")
    cursor = con.cursor()
    cursor.execute("""
        SELECT COUNT(*) FROM StockTransactions 
        WHERE Politician=:politician AND Stocks=:stocks AND BuyOrSell=:buyOrSell AND SizeOf=:sizeOf AND PriceOfStock=:priceOfStock AND DateBought=:dateBought AND DatePublished=:datePublished
    """, transaction)
    count = cursor.fetchone()[0]
    cursor.close()
    con.close()
    return count > 0

def printDatabase():
    con = sqlite3.connect("discordBot.db")
    cursor = con.cursor()
    cursor.execute("""
    SELECT * FROM StockTransactions
    """)
    rows = cursor.fetchall()
    for row in rows:
        print(row)
    
    cursor.close()
    con.close()

def getRecent(numRecent):
    con = sqlite3.connect("discordBot.db")
    cursor = con.cursor()
    cursor.execute("SELECT * FROM StockTransactions ORDER BY dateBought DESC LIMIT ?;", (numRecent,))
    rows = cursor.fetchall()
    return rows

setupDb(dropFirst=True)
pullStocks()
printDatabase()