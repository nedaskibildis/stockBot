import React from "react";
import { useState, useEffect } from "react";

export default function MovingGradient({color}) {

    const speedX = parseFloat((Math.random()).toFixed(2));
    const speedY = parseFloat((Math.random()).toFixed(2));
    const [circleY, setCircleY] = useState(Math.floor(Math.random() * (window.innerHeight)) + 1)
    const [numToAddY, setNumToAddY] = useState(speedY)
    const [circleX, setCircleX] = useState(Math.floor(Math.random() * (window.innerWidth)) + 1)
    const [numToAddX, setNumToAddX] = useState(speedX)
    
    
    // Change Y Height Of Right And Left Circles
    useEffect(() => {
        const interval = setInterval(() => {
        // Update Y position
        if (circleY >= window.innerHeight){
            setNumToAddY(-speedY)
        } else if (circleY < 0 - (window.innerHeight * .33)) {
            setNumToAddY(speedY)
        }
        setCircleY(prevY => prevY + numToAddY)

        // Update X position for the right circle
        if (circleX > window.innerWidth) {
            setNumToAddX(-speedX)
        } else if (circleX < 0 - (window.innerWidth * .25)) {
            setNumToAddX(speedX)
        }
        setCircleX(prevX => prevX + numToAddX)
    }, 7); // Run every 10 milliseconds

    return () => clearInterval(interval);// Cleanup function to clear interval on unmount
    }, [circleX, circleY, numToAddX, numToAddY, speedX, speedY]);

    return (
        <div className="absolute z-0 w-1/4 h-1/3 top-0 left-0 overflow-hidden" style={{background: `radial-gradient(circle at center, ${color}, transparent 60%)`, top:`${circleY}px`, left:`${circleX}px`}}></div>
    )
}