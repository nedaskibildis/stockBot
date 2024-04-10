import React, { useState } from "react";

export default function Navbar() {

    return (
        <div className={`pb-6 h-[100vh] flex flex-col justify-between bg-mainBlack w-48`}>
            <div className="h-[30%] flex flex-col">
                <div className="tracking-widest text-4xl text-mainWhite font-extrabold italic w-full text-center mt-4"> CT</div>
                <div className="flex flex-col h-full">
                    <div className="text-mainWhite flex items-center mt-3 h-1/3 hover:bg-secondaryPurple hover:font-bold">
                        <img src="/stock.svg" alt="" className="pl-4 h-6 mr-3"/>
                        <div className="">Stocks</div>
                    </div>
                    <div className="text-mainWhite flex items-center h-1/3  hover:bg-secondaryPurple hover:font-bold">
                        <img src="/politician.svg" alt="" className="pl-4 h-6 mr-3"/>
                        <div className="">Politicians</div>
                    </div>
                    <div className="text-mainWhite flex items-center  h-1/3  hover:bg-secondaryPurple hover:font-bold">
                        <img src="/userProfile.svg" alt="" className="pl-4 h-6 mr-3"/>
                        <div className="">Your Account</div>
                    </div>
                </div>
            </div>
            <div className="text-mainWhite flex items-center h-12 hover:font-bold">
                    <img src="/logout.svg" alt="" className="h-6 mx-4"/>
                    <div>Logout</div>
                </div>
        </div>
    );
}
