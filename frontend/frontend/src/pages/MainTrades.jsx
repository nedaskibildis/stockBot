import React from "react"
import Navbar from "../components/Navbar"
import RecentStocksCard from "../components/RecentStocksCards"
import RecentPoliticians from "../components/RecentPoliticians"

export default function MainTrades() {
    return (
        <div className="bg-mainBlack h-screen ">
            <Navbar />
            <div className="grid grid-cols-2 w-[90vw] ml-auto">
                <RecentPoliticians/>
                <div className="row-span-2">
                    <RecentStocksCard/>
                </div>
                <RecentPoliticians/>
            </div>
        </div>
    )
}