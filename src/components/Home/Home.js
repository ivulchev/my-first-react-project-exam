import styles from "./Home.module.css"
function Home() {
    return (
        <header className="header">
            <p className={styles.homeParagraph}>"First, you have to finish." – Michael Schumacher</p>
        </header>
    )
}
export default Home