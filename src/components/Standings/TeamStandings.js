import styles from "./TeamStandings.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { endpoints } from "../../services/services";

function TeamsStandings() {
    const [first, setFirst] = useState([]);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}teams.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                array.sort((a, b) => {
                    return b.rating - a.rating || a.name.localeCompare(b.name)
                })
                const timer = setTimeout(() => {
                    setFirst(array[0])
                setTeams(array)
                }, 1000);
                
            });
    }, []);
    return (
        <header>
            <div className="card" id={styles.standings}>
                <h3>Top Teams</h3>
                <img src={first.image} id={styles.img} />
                <ul className="list-group list-group-flush">
                    <ul className="list-group list-group-flush">
                    {(!teams.length == 0) ? <li className="list-group-item" id={styles.list} key={teams[0]._id} > <strong>1st: </strong>  <Link id={styles.names} to={`/teams/${teams[0]._id}`} className="card-link">{teams[0].name}</Link>: <strong>{teams[0].rating}</strong></li> : <li id={styles.list} className="list-group-item" ><li id={styles.names} className="card-link">Loading...</li></li>}
                        {(!teams.length == 0) ? <li className="list-group-item" id={styles.list} key={teams[1]._id} ><strong>2nd: </strong> <Link id={styles.names} to={`/teams/${teams[1]._id}`} className="card-link">{teams[1].name}</Link>: <strong>{teams[1].rating}</strong></li> : <li id={styles.list} className="list-group-item" ><li id={styles.names} className="card-link">Loading...</li></li>}
                        {(!teams.length == 0) ? <li className="list-group-item" id={styles.listCutted} key={teams[2]._id} ><strong>3rd: </strong> <Link id={styles.names} to={`/teams/${teams[2]._id}`} className="card-link">{teams[2].name}</Link>: <strong>{teams[2].rating}</strong></li> : <li id={styles.listCutted} className="list-group-item" ><li id={styles.names} className="card-link">Loading...</li></li>}
                    </ul>
                </ul>
            </div>
        </header>
    )
}

export default TeamsStandings