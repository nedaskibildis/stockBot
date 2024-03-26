from scraper import scrapeStocks
import mariadb
import sys
import os
from dotenv import load_dotenv


def connectToDb():
    try:
        conn = mariadb.connect(
            user=os.getenv('DB_USER'),
            password=os.getenv('DB_PASSWORD'),
            host=os.getenv('DB_ADDRESS'),
            port=3306,
            database=os.getenv('DB_DATABASE')
        )
    except mariadb.Error as e:
        print(f"Error Connecting To MariaDB Platform: {e}")
        sys.exit(1)
    
    return conn.cursor

cursor = connectToDb()
