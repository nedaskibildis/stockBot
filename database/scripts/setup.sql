USE stockbot_db;

DROP TABLE IF EXISTS StockTransactions;

CREATE TABLE StockTransactions (
    Politician TEXT,
    Stocks TEXT,
    BuyOrSell TEXT,
    SizeOf TEXT,  -- Adjust the length based on your data
    PriceOfStock REAL,
    DateBought TEXT,
    DatePublished TEXT
);