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
        <div className="grid_container">
            <h2>F1 Race Calendar - 2022</h2>
            <header className="calendar--header">
                <section className="date-header">Date</section>
                <section className="track-header">Track</section>
                <section className="country-header">Country</section>
                <section className="name-header">GP Name</section>
                <section className="status-header">Status</section>
            </header>
            
            <ul>
                {thisYear.map((x) => <li>
                    <article className="races">
                        <p className="date">{x.start_date} </p>
                        <p className="track">{x.track}</p>
                        <p className="country">{x.country}</p>
                        <p className="gp--name">{x.name}</p>
                        <p className={`status ${raceStatus(x.status)}`}>{x.status}</p>
                    </article>
                </li>)}
            </ul>
        </div>
    )
    return thisYear.length > 0 ? thisSeason : <Loading />

}
export default Calendar