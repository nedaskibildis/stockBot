import React from "react"


export default function HomeButton({text, link, target}) {
    const anchorTarget = target ? "_blank" : "_self";
    return (
            <a href={link} className="m-3 z-10 border-mainWhite px-5 py-2 text-lg border rounded-xl text-mainWhite shadow-mainWhite shadow-sm hover:bg-mainWhite hover:text-[#3a0ca3]" target={anchorTarget}>{text}</a>
    )
}

