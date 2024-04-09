import React, { useState } from "react";

export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    function handleClick() {
        setIsHovered(!isHovered);
    }

    return (
        <div className={`h-12 flex items-center justify-between p-4`}>
            <div className="tracking-widest text-2xl text-mainWhite font-extrabold italic m-6"> CAPITOL TRACKER</div>
            {!isHovered && (
            <img 
            src="/hamburgerMenu.svg" 
            alt="hamburger menu icon" 
            className="h-10 mx-4 mt-2 hover:cursor-pointer" 
            onClick={handleClick}/>
            )}
                {isHovered && (
                        <div
                        className="nav flex w-[40%] justify-evenly items-center"
                        onClick={handleClick}> 
                            <div className=" text-mainWhite hover:font-extrabold p-2 ">Stocks</div>
                            <div className=" text-mainWhite hover:font-extrabold ">Politicians</div>
                            <div className=" text-mainWhite hover:font-extrabold ">Your Account</div>
                            <div className="flex justify-center items-center text-mainWhite hover:font-extrabold">
                                <img src="/logout.svg" alt="" className="h-6 mx-4"/>
                                <div>Logout</div>
                            </div>
                            <div>
                                <img src="/closeNav.svg" alt="" className="h-12 absolute top-0 hover:cursor-pointer"/>
                            </div>    
                        </div>
            )}
        </div>
    );
}
