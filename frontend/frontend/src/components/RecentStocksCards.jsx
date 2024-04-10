import { useState } from "react";

export default function RecentStocksCards() {

    const sampleStockPurchases = [
    {
        name: 'Nedas Kibildis',
        stock: "Apple",
        code: "APL",
        amount: "100k",
        buyOrSell: "Bought",
        stockValue: '154.39'
    },
    {
        name: 'John Doe',
        stock: "Google",
        code: "GOOGL",
        amount: "50k",
        buyOrSell: "Bought",
        stockValue: '2350.45'
    },
    {
        name: 'Jane Smith',
        stock: "Amazon",
        code: "AMZN",
        amount: "75k",
        buyOrSell: "Sold",
        stockValue: '3200.67'
    },
    // Add more entries here...
    {
        name: 'Alice Johnson',
        stock: "Microsoft",
        code: "MSFT",
        amount: "80k",
        buyOrSell: "Bought",
        stockValue: '300.20'
    },
    {
        name: 'Nedas Kibildis',
        stock: "Apple",
        code: "APL",
        amount: "100k",
        buyOrSell: "Bought",
        stockValue: '154.39'
    },
    {
        name: 'John Doe',
        stock: "Google",
        code: "GOOGL",
        amount: "50k",
        buyOrSell: "Bought",
        stockValue: '2350.45'
    },
    {
        name: 'Jane Smith',
        stock: "Amazon",
        code: "AMZN",
        amount: "75k",
        buyOrSell: "Sold",
        stockValue: '3200.67'
    },
    // Add more entries here...
    {
        name: 'Alice Johnson',
        stock: "Microsoft",
        code: "MSFT",
        amount: "80k",
        buyOrSell: "Bought",
        stockValue: '300.20'
    },
    
];
    return (
        <div className="h-[85vh] border border-borderPurple rounded-3xl shadow-[0_0px_15px_1px_rgba(0,0,0,0.3)] shadow-mainPurple flex flex-col items-center bg-mainPurple justify-around text-mainBlack">
            <h2 className=" text-2xl font-semibold text-center mt-3">Recent Stock Purchases</h2>
                {sampleStockPurchases.map((purchase, index) => (
                    <div key={index} className=" flex">
                        <p className="px-3 text-left max-w-48">{purchase.name}</p>
                        <p className="px-3 text-left">{purchase.stock}</p>
                        <p className="px-3 text-left">{purchase.buyOrSell}</p>
                    </div>
                ))}
            <button className=" border border-mainBlack w-48 py-2 rounded-xl mb-3">View More</button>
        </div>
    )
}