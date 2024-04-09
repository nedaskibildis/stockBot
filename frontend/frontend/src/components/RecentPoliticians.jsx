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
        {
            name: "Josh Wood",
            numPurchases: "103",
            monthsProfitability: 2.98
        },
    ]


    return (
        <div className="h-[40vh] border border-borderPurple shadow-[0_0px_15px_1px_rgba(0,0,0,0.3)] w-[40vw] m-4 mt-6 shadow-mainPurple rounded-2xl p-4 text-mainWhite flex flex-col justify-between items-center">
            <h2 className="text-center text-2xl font-bold">Most Active Politicians Of The Month</h2>
            {samplePoliticians.map((politician, index) => (
                <div className="flex text-lg font-normal items-center justify-evenly w-full"> 
                    <p className="w-1/4">{politician.name}</p>
                    <p className="w-1/4 text-right">{politician.numPurchases}</p>
                    <p  className="w-1/4 text-right"
                    style={{
                        color: politician.monthsProfitability > 0 ? 'green' : 'red'
                    }}>{politician.monthsProfitability}</p>
                </div>
            ))}
            <button className="text-center py-2 w-3/4 border border-mainWhite rounded-xl"> View More </button>
        </div>
    )
}