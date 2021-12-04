import styles from "./Home.module.css";
import DriverStandings from "../Standings/DriverStandings";
function Home() {
    return (
        <header className="header">
            <DriverStandings/>
            <p className={styles.homeParagraph}>"First, you have to finish." – Michael Schumacher</p>
        </header>
    )
}
export default Home