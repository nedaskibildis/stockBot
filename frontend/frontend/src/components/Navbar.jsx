import { useState } from "react"

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className="h-18 px-6 py-3 flex justify-between items-center bg-mainBlack">
            <div className="text-xl font-extrabold italic text-white">CAPITOLTRACKER</div>
            <form action="" className="justify-self-center">
                <input type="text" className="border border-white px-4 p-2 rounded-3xl text-white bg-mainBlack" placeholder="Search..."/>
            </form>
            <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className="relative mx-3"> <img src="/userProfile.svg" alt="" className="mx-auto"/>
            {isHovered && (
                <div onMouseEnter={()=>setIsHovered(true)}
                 onMouseLeave={()=>setIsHovered(false)}
                 className="absolute align-middle h-12 bg-mainBlack text-white p-5 rounded-l-xl"> 
                    Login
                </div>
            )}</div>
        </div>
    )
}