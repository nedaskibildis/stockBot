import { useState } from "react"

export default function Sidebar() {
    return (
        <div className="h-[100vh] bg-[#3f37c9] w-[5%] flex flex-col justify-between items-center">
            <img src="/hamburgerMenu.svg" alt="hamburger" className="h-12 w-12 my-3"/>
            <img src="/userProfile.svg" alt="" className="h-10 w-10 my-3"/>
        </div>
    )
}