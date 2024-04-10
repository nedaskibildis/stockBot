import React from "react"
import Navbar from "../components/Navbar"
import RecentStocksCard from "../components/RecentStocksCards"
import RecentPoliticians from "../components/RecentPoliticians"

export default function MainTrades() {
    return (
        <div className="bg-gray-200 h-screen flex items-center justify-center">
            <div className="grid grid-cols-5 w-[100vw]">
                <div className="row-span-2">
                    <Navbar />
                </div>
                <div className="col-span-2 row-span-2 flex flex-col my-auto mx-4">
                    <RecentPoliticians/>
                    <RecentPoliticians/>
                </div>
                <div className="col-span-2 row-span-2 my-auto mx-4 mr-12">
                    <RecentStocksCard/>
                </div>
            </div>
        </div>
    )
}