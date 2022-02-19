import "./Home.css"
import DriverStandings from "../Standings/DriverStandings";
import TeamsStandings from "../Standings/TeamStandings";
import { useEffect, useState } from "react";
function Home() {
    let ready = " "
    useEffect(() => {
        ready = "yes"
    },[])
    return (
        <header className="home-header">
            <DriverStandings/>
            <TeamsStandings/>
        </header>
    )
}
export default Home