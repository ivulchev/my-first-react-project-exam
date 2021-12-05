import styles from "./LiveTable.module.css";
import { useState, useEffect } from "react"
function LiveTable() {
    const [drivers, setDrivers] = useState([]);
    const [constructors, setConstructors] = useState([]);
    useEffect(() => {
        fetch(`https://f1-live-motorsport-data.p.rapidapi.com/drivers/standings/2021`, {
            headers: {
                'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
                'x-rapidapi-key': '556f5e858amsh84ff367d8aa60e4p1e7e01jsne580e77a8b45'
            }
        })
            .then(res => res.json())
            .then(result => {
                setDrivers(result.results)
            });
        fetch(`https://f1-live-motorsport-data.p.rapidapi.com/constructors/standings/2021`, {
            headers: {
                'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
                'x-rapidapi-key': '556f5e858amsh84ff367d8aa60e4p1e7e01jsne580e77a8b45'
            }
        })
        .then(res => res.json())
        .then(result => {
            setConstructors(result.results)
        });
    }, []);
    return (
        <header className = "row">
            <div className="card" id={styles.driverStandings}>
                <h3>Live Time Drivers Standings Season 2021</h3>
                <ul className="list-group list-group-flush">
                    {(!drivers.length == 0) ?
                        <ul className="list-group list-group-flush">
                            {drivers.map((driver) => <li className="list-group-item" key={driver.driver_id} id={styles.driversLi} ><strong>{driver.position}:</strong> {driver.driver_name}: <strong>{driver.points}</strong> Team: <strong>{driver.team_name}</strong> Nationality: <strong>{driver.nationality}</strong></li>)}

                        </ul>
                        :
                        <li>Loading...</li>}
                </ul>
            </div>
            <div className="card" id={styles.constructorsStandings}>
                <h3>Live Time Constructors Standings Season 2021</h3>
                <ul className="list-group list-group-flush">
                    {(!constructors.length == 0) ?
                        <ul className="list-group list-group-flush">
                            {constructors.map((constructor) => <li className="list-group-item" key={constructor.team_id} id={styles.constructorsLi}><strong>{constructor.position}:</strong> {constructor.team_name}: <strong>{constructor.points}</strong></li>)}

                        </ul>
                        :
                        <li>Loading...</li>}
                </ul>
            </div>
        </header>
    )
}

export default LiveTable
