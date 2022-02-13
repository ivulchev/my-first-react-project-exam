import "./Home.css"
import DriverStandings from "../Standings/DriverStandings";
import TeamsStandings from "../Standings/TeamStandings";
function Home() {
    return (
        <header className="standings">
            <DriverStandings/>
            <TeamsStandings/>
        </header>
    )
}
export default Home