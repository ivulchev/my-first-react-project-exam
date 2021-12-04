import styles from "./Home.module.css";
import DriverStandings from "../Standings/DriverStandings";
import TeamsStandings from "../Standings/TeamStandings";
function Home() {
    return (
        <header className="row">
            <DriverStandings/>,
            <TeamsStandings/>
            <p className={styles.homeParagraph}>"First, you have to finish." – Michael Schumacher</p>
        </header>
    )
}
export default Home