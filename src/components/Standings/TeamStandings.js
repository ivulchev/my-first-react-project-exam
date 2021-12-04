import styles from "./TeamStandings.module.css"
import { useEffect, useState } from "react";

function TeamsStandings() { 
    const [first, setFirst] = useState([]);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/teams`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                array.sort((a,b) => {
                    return b.rating - a.rating || a.name.localeCompare(b.name)
                } )
                setFirst(array[0])
                setTeams(array)
            });
    }, []);
    return (
        <header>
            <div className="card" id={styles.standings}>
                <h3>Top Teams</h3>
            <img src={first.image} alt="Card img cap" />
            <ul className="list-group list-group-flush">
                {(!teams.length == 0)?
                <ul className="list-group list-group-flush">
                <li className="list-group-item" key={teams[0]._id} ><strong>1st:</strong> {teams[0].name}: <strong>{teams[0].rating}</strong></li> 
                <li className="list-group-item" key={teams[1]._id} ><strong>2nd:</strong> {teams[1].name}: <strong>{teams[1].rating}</strong></li> 
                <li className="list-group-item" key={teams[2]._id} ><strong>3rd:</strong> {teams[2].name}: <strong>{teams[2].rating}</strong></li> 
                </ul>
                :
                <li>Loading...</li>}
            </ul>
        </div>
        </header>
    )
}

export default TeamsStandings