import styles from "./Home.module.css";
import VoteStandings from "../Standings/VoteStandings";
function Home() {
    return (
        <header className="header">
            <VoteStandings/>
            <p className={styles.homeParagraph}>"First, you have to finish." – Michael Schumacher</p>
        </header>
    )
}
export default Home