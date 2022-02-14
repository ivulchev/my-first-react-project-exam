import { useState, useEffect } from "react";
import "./Calendar.css"
import Loading from "../Loading/Loading";

function Calendar() {
    const [thisYear, setThisYear] = useState([]);
    useEffect(() => {
        fetch(`https://f1-live-motorsport-data.p.rapidapi.com/races/2022`, {
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
            return "confirmed"
        } else if (status === "Postponed") {
            return "postponed"
        } else if (status === "Cancelled") {
            return "cancelled"
        } else if (status === "Complete") {
            return "completed"
        }
    }


    let thisSeason = (
        <table class="calendar">
            <h2>Season 2022 Race Calendar</h2>
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Track</th>
                    <th scope="col">Country</th>
                    <th scope="col">Grand Prix</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                { thisYear.map((x) => <tr>
                    <th scope="row">{x.start_date}</th>
                    <td>{x.track}</td>
                    <td>{x.country}</td>
                    <td>{x.name}</td>
                    <td className={`status ${raceStatus(x.status)}`}>{x.status}</td>
                </tr>)}
            </tbody>
            
        </table>
    )
    return thisYear.length > 0 ? thisSeason : <Loading />

}
export default Calendar