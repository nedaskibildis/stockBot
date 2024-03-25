USE stockbot_db;

CREATE TABLE IF NOT EXISTS  StockTransactions (
        Politician TEXT,
        Stocks TEXT,
        BuyOrSell TEXT,
        SizeOf INTEGER,
        PriceOfStock REAL,
        DateBought TEXT,
        DatePublished TEXT
)