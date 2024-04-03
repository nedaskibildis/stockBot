import HomeButton from "../components/HomeButton";
import { useEffect, useState } from "react";

export default function Landing() {
    const [rightCircleY, setRightCircleY] = useState(0)
    const [numToAddRight, setNumToAddRight] = useState(1)
    const [leftCircleY, setLeftCircleY] = useState(window.innerHeight * 0.3)
    const [numToAddLeft, setNumToAddLeft] = useState(1)
    const [rightCircleX, setRightCircleX] = useState(0)
    const [numToAddRightX, setNumToAddRightX] = useState(1)
    const [leftCircleX, setLeftCircleX] = useState(window.innerWidth * 0.3)
    const [numToAddLeftX, setNumToAddLeftX] = useState(1)
    
    // Change Y Height Of Right And Left Circles
    useEffect(() => {
        const interval = setInterval(() => {
        // Update Y position for both circles
        if (rightCircleY >= window.innerHeight - (window.innerHeight * 0.68)){
            setNumToAddRight(-1)
        } else if (rightCircleY < 0 - (window.innerHeight * 0.3)) {
            setNumToAddRight(1)
        }
        setRightCircleY(prevY => prevY + numToAddRight)

        if (leftCircleY >= window.innerHeight - (window.innerHeight * 0.68)){
            setNumToAddLeft(-1)
        } else if (leftCircleY < 0 - (window.innerHeight * 0.3)) {
            setNumToAddLeft(1)
        }
        setLeftCircleY(prevY => prevY + numToAddLeft)

        // Update X position for the right circle
        if (rightCircleX > window.innerWidth) {
            setNumToAddRightX(-0.75)
        } else if (rightCircleX < 0 - (window.innerWidth * 0.3)) {
            setNumToAddRightX(0.75)
        }
        setRightCircleX(prevX => prevX + numToAddRightX)

        // Update Y position for the left circle
        if (leftCircleX > window.innerWidth) {
            setNumToAddLeftX(-0.75)
        } else if (leftCircleX < 0 - (window.innerWidth * 0.3)) {
            setNumToAddLeftX(0.75)
        }
        setLeftCircleX(prevX => prevX + numToAddLeftX)
    }, 10); // Run every 10 milliseconds

    return () => clearInterval(interval);// Cleanup function to clear interval on unmount
    }, [rightCircleY, numToAddRight, leftCircleY, numToAddLeft, rightCircleX, numToAddRightX, leftCircleX, numToAddLeftX]); // Empty dependency array, runs once on mount


    return (
        <div className="h-screen flex flex-col justify-center items-center bg-[#3a0ca3]">
            <div className="absolute z-0 w-1/3 h-2/3 top-0 left-0 overflow-hidden" style={{background: 'radial-gradient(circle at center, #7209b7, transparent 60%)', top:`${leftCircleY}px`, left:`${leftCircleX}px`}}></div>
            <div className="absolute z-0 w-1/3 h-2/3 bottom-0 right-0 overflow-hidden" style={{background: 'radial-gradient(circle at center, #7209b7, transparent 70%)', top:`${rightCircleY}px`, right:`${rightCircleX}px`}}></div>
            <h1 className="text-6xl z-10 font-bold text-mainWhite mb-3">Welcome To The Capital Trading Tracker</h1>
            <h3 className="text-3xl z-10 font-medium  text-mainWhite mb-3"> The Easiest Way To Keep Track Of Congress Members Stock Purchases</h3>
            <p className="text-lg z-10 text-mainWhite mb-3">Select On Of Our Options Below To Get Started</p>
            <div className="z-10">
                <HomeButton text={"View Trades"} link={"trades"} target={false}/>
                <HomeButton text={"Discord Bot"} link={"https://www.google.ca"} target={true}/>
            </div>
        </div>
    )
}
