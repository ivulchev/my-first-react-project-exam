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
        <header className="row" id={styles.standings}>
            
            <h3 id={styles.tableHeader}> <strong>Drivers Leaderboard Season 2021 </strong> </h3>
            <table className="table table-striped table-dark" >
                <thead>
                    <tr>
                        <th scope="col">Position</th>
                        <th scope="col">Name</th>
                        <th scope="col">Points</th>
                        <th scope="col">Team</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map((driver) => <tr key={driver.driver_id}>
                        <th scope="row">{driver.position}</th>
                        <td>{driver.driver_name}</td>
                        <td>{driver.points}</td>
                        <td>{driver.team_name}</td>
                    </tr>)}

                </tbody>
            </table>
            <h3 id={styles.tableHeader}> <strong>Teams Leaderboard Season 2021 </strong></h3>
            <table className="table table-striped table-dark" id={styles.teamStandings}>
                <thead>
                    <tr>
                        <th scope="col">Position</th>
                        <th scope="col">Name</th>
                        <th scope="col">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {constructors.map((x) => <tr key={x.team_id}>
                        <th scope="row">{x.position}</th>
                        <td>{x.team_name}</td>
                        <td>{x.points}</td>
                    </tr>)}

                </tbody>
            </table>
        </header>
    )
}

export default LiveTable
