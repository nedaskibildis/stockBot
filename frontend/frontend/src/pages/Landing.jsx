import HomeButton from "../components/HomeButton";
import MovingGradient from "../components/MovingGradient";

export default function Landing() {
     // Empty dependency array, runs once on mount


    return (
        <div className="relative h-screen flex flex-col justify-center items-center bg-[#3a0ca3]" style={{overflow:'hidden'}}>
            <MovingGradient color={"#560bad"}/>
            <MovingGradient color={"#560bad"}/>
            <MovingGradient color={"#560bad"}/>
            <MovingGradient color={"#b5179e"} />
            <MovingGradient color={"#b5179e"}/>
            <MovingGradient color={"#4361ee"}/>
            <MovingGradient color={"#4361ee"} />
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
