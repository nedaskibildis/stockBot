import React, { useState, useEffect } from "react";

export default function MovingGradient({ color }) {
    const speedX = parseFloat((Math.random()).toFixed(2));
    const speedY = parseFloat((Math.random()).toFixed(2));
    const [circleY, setCircleY] = useState(Math.floor(Math.random() * (window.innerHeight)) + 1);
    const [numToAddY, setNumToAddY] = useState(speedY);
    const [circleX, setCircleX] = useState(Math.floor(Math.random() * (window.innerWidth)) + 1);
    const [numToAddX, setNumToAddX] = useState(speedX);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (circleY >= window.innerHeight) {
                setNumToAddY(-speedY);
            } else if (circleY < 0 - (window.innerHeight * .33)) {
                setNumToAddY(speedY);
            }
            setCircleY(prevY => prevY + numToAddY);

            if (circleX > window.innerWidth) {
                setNumToAddX(-speedX);
            } else if (circleX < 0 - (window.innerWidth * .25)) {
                setNumToAddX(speedX);
            }
            setCircleX(prevX => prevX + numToAddX);
        }, 7); // Run every 7 milliseconds

        return () => clearInterval(interval);
    }, [circleX, circleY, numToAddX, numToAddY, speedX, speedY]);

    return (
        <div className="absolute z-0 w-1/4 h-1/3 top-0 left-0 overflow-hidden" style={{ background: `radial-gradient(circle at center, ${color}, transparent 60%)`, top: `${circleY}px`, left: `${circleX}px` }}></div>
    );
}
