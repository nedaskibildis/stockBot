import HomeButton from "../components/HomeButton"

export default function Landing() {

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-[#3a0ca3]">
            <h1 className="text-6xl font-bold text-mainWhite mb-3">Welcome To The Stock Trading Bot</h1>
            <h3 className="text-2xl  text-mainWhite mb-3">Your All In One Hub For Stocks Traded By Congress Members</h3>
            <div>
                <HomeButton text={"View Trades"} link={"trades"} target={false}/>
                <HomeButton text={"Discord Bot"} link={"https://www.google.ca"} target={true}/>
            </div>
        </div>
    )
}