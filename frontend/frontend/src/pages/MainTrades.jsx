import React from "react"
import Navbar from "../components/Navbar"
import RecentStocksCard from "../components/RecentStocksCards"
import RecentPoliticians from "../components/RecentPoliticians"

export default function MainTrades() {
    return (
        <div className="bg-gradient-to-bl from-secondaryPurple to-mainPurple h-screen flex items-center justify-center">
            <div className="grid grid-cols-5 w-[100vw]">
                <div className="row-span-2">
                    <Navbar />
                </div>
                <div className="col-span-2 row-span-2 mx-4 flex flex-col justify-between">
                    <RecentPoliticians/>
                    <RecentPoliticians/>
                </div>
                <div className="col-span-2 row-span-2 mx-4">
                    <RecentStocksCard/>
                </div>
            </div>
        </div>
    )
}