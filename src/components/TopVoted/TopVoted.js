
import DriverStandings from "../Standings/DriverStandings";
import TeamsStandings from "../Standings/TeamStandings";
import { useEffect } from "react";
function TopVoted() {
    let ready = " "
    useEffect(() => {
        ready = "yes"
    },[])
    return (
        <header className="voted-header">
            <DriverStandings/>
            <TeamsStandings/>
        </header>
    )
}
export default TopVoted