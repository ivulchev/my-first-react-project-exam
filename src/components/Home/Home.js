import styles from "./Home.module.css";
import DriverStandings from "../Standings/DriverStandings";
import TeamsStandings from "../Standings/TeamStandings";
import LegendsStandings from "../Standings/LegendsStandings";
function Home() {
    return (
        <header className="row" id={styles.home}>
            <DriverStandings/>
            <TeamsStandings/>
            <LegendsStandings/>
        </header>
    )
}
export default Home