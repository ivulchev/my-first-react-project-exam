import { useState, useEffect } from "react";
import styles from "./Calendar.module.css"
function Calendar() {
    const [year, setYear] = useState("2021")
    const [thisYear, setThisYear] = useState([]);
    useEffect(() => {
        fetch(`https://f1-live-motorsport-data.p.rapidapi.com/races/2021`, {
            headers: {
                'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
                'x-rapidapi-key': '556f5e858amsh84ff367d8aa60e4p1e7e01jsne580e77a8b45'
            }
        })
            .then(res => res.json())
            .then(result => {
                setThisYear(result.results)
            });
    }, [])

    function raceStatus(status) {
        if (status === "Confirmed") {
            return styles.confirmed
        } else if (status === "Postponed") {
            return styles.postponed
        } else if (status === "Cancelled") {
            return styles.cancelled
        } else if (status == "Complete") {
            return styles.completed
        }
    }


    let thisSeason = (
        <div>
            <h3 id={styles.tableHeader}> <strong> Season 2021 Calendar</strong></h3>
            <table className="table table-striped table-dark" id={styles.teamStandings}>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Track</th>
                        <th scope="col">Country</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {thisYear.map((x) => <tr key={x.race_id}>
                        <th scope="row">{x.name}</th>
                        <td>{x.track}</td>
                        <td>{x.country}</td>
                        <td>{`${x.start_date} / ${x.end_date}`}</td>
                        <td id={raceStatus(x.status)}>{x.status}</td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    )
    return (
        <header className="row" id={styles.standings}>
            {thisSeason}
        </header>
    )

}
export default Calendar