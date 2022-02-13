import "./LiveTable.css";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
function LiveTable() {
    const [drivers, setDrivers] = useState([]);
    const [constructors, setConstructors] = useState([]);
    useEffect(() => {
        fetch(`https://f1-live-motorsport-data.p.rapidapi.com/drivers/standings/2022`, {
            headers: {
                'x-rapidapi-host': 'f1-live-motorsport-data.p.rapidapi.com',
                'x-rapidapi-key': '556f5e858amsh84ff367d8aa60e4p1e7e01jsne580e77a8b45'
            }
        })
            .then(res => res.json())
            .then(result => {
                setDrivers(result.results)
            });
        fetch(`https://f1-live-motorsport-data.p.rapidapi.com/constructors/standings/2022`, {
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
    let driverLeaderboard = (
        <section className={`drivers--standings`}>
            <h2>Season 2022 Drivers Leaderboard</h2>
            <ul>
            {drivers.map((x)=><li>
                <article className={`others ${x.team_name}`}>
                <p className="place">{x.position}: </p>
                <p class="name">{x.driver_name}</p>
                <p class="points">{x.points}pts</p>
                <img class="team--logo table" src={`logos-full-name/${x.team_name}.png`}/>
                <img class="flag" src={`flags/${x.nationality}.png`}/>
            </article>
            </li> )}
            </ul>
        </section>
    )

    let teamLeaderboard = (
        <section className={`drivers--standings`}>
            <h2>Season 2022 Constructors Leaderboard</h2>
            <ul>
            {constructors.map((x)=><li>
                <article className={`others ${x.team_name}`}>
                <p className="place">{x.position}: </p>
                <p class="name">{x.team_name}</p>
                <p class="points">{x.points}pts</p>
                <img class="team--logo table--constructor" src={`logos-full-name/${x.team_name}.png`}/>
            </article>
            </li> )}
            </ul>
        </section>
    )
    return (drivers.length > 0 ?
            <section className="leaderboards">
                {driverLeaderboard}  {teamLeaderboard}
            </section> : <Loading />
    )
}

export default LiveTable
