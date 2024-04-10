import React from "react";
export default function RecentPoliticians() {

    const samplePoliticians = [
        {
            name: "Josh Wood",
            numPurchases: "103",
            monthsProfitability: -2.98
        },
        {
            name: "Nedas Kibildis",
            numPurchases: "1033",
            monthsProfitability: 32.98 
        },
        {
            name: "Joffre Du Preez",
            numPurchases: "10",
            monthsProfitability: -12.98 
        },
    ]


    return (
        <div className="h-[41vh] w-full p-4 text-mainBlack bg-mainWhite my-2 flex flex-col justify-between items-center">
            <h2 className="text-xl mb-3">Most Active This Month</h2>
            <div className="flex text-medium font-normal items-center justify-between px-4 w-full text-gray-500">
                <p>Name</p>
                <p>Stocks Purchased</p>
                <p>Total Returns</p>
            </div>
            {samplePoliticians.map((politician, index) => (
                <>
                <div className="w-[95%] bg-black h-[0.1px]"></div>
                <div className="flex text-medium font-normal items-center justify-between px-4 w-full">
                    <p className="w-1/4">{politician.name}</p>
                    <p className="w-1/4 text-right px-6">{politician.numPurchases}</p>
                    <p  className="w-1/4 text-right"
                    style={{
                        color: politician.monthsProfitability > 0 ? 'limegreen' : 'red'
                    }}>{politician.monthsProfitability}</p>
                </div>
                </>
            ))}
            <button className="text-center py-2 font-bold w-1/2"> .  .  . </button>
        </div>
    )
}