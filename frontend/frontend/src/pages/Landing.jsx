import HomeButton from "../components/HomeButton";
import { useState, useEffect, useRef } from "react";

export default function Landing() {
    const [topPosition, setTopPosition] = useState(0);
    const [leftPosition, setLeftPosition] = useState(0);
    const [bottomPosition, setBottomPosition] = useState(0);
    const [rightPosition, setRightPosition] = useState(0);
    const requestRef = useRef();
    const previousTimeRef = useRef();

    useEffect(() => {
        const moveElements = (time) => {
            const deltaTime = time - previousTimeRef.current;

            setTopPosition(prevTopPosition => {
                const newTopPosition = prevTopPosition + getRandomNumber() * 5 * deltaTime / 100;
                return Math.max(0, Math.min(window.innerHeight - 500, newTopPosition));
            });
            setLeftPosition(prevLeftPosition => {
                const newLeftPosition = prevLeftPosition + getRandomNumber() * 5 * deltaTime / 100;
                return Math.max(0, Math.min(window.innerWidth - 500, newLeftPosition));
            });
            setBottomPosition(prevBottomPosition => {
                const newBottomPosition = prevBottomPosition + getRandomNumber() * 5 * deltaTime / 100;
                return Math.max(0, Math.min(window.innerHeight - 500, newBottomPosition));
            });
            setRightPosition(prevRightPosition => {
                const newRightPosition = prevRightPosition + getRandomNumber() * 5 * deltaTime / 100;
                return Math.max(0, Math.min(window.innerWidth - 500, newRightPosition));
            });

            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(moveElements);
        };

        previousTimeRef.current = performance.now();
        requestRef.current = requestAnimationFrame(moveElements);

        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    function getRandomNumber() {
        const randomNumber = Math.random();
        return randomNumber < 0.5 ? -1 : 1;
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-[#3a0ca3]">
            <div className="absolute z-0 w-1/3 h-2/3 top-0 left-0" style={{background: 'radial-gradient(circle at center, #7209b7, transparent 60%)', top: `${topPosition}px`, left: `${leftPosition}px` }}></div>
            <div className="absolute z-0 w-1/3 h-2/3 bottom-0 right-0" style={{background: 'radial-gradient(circle at center, #7209b7, transparent 70%)', bottom: `${bottomPosition}px`, right: `${rightPosition}px` }}></div>
            <h1 className="text-6xl z-10 font-bold text-mainWhite mb-3">Welcome To The Stock Trading Bot</h1>
            <h3 className="text-2xl z-10  text-mainWhite mb-3">Your All In One Hub For Stocks Traded By Congress Members</h3>
            <div className="z-10">
                <HomeButton text={"View Trades"} link={"trades"} target={false}/>
                <HomeButton text={"Discord Bot"} link={"https://www.google.ca"} target={true}/>
            </div>
        </div>
    )
}
