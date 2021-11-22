import styles from "./VoteStandings.module.css"
import { useEffect, useState } from "react";

function VoteStandings() {
    
    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/data/pilots`)
            .then(res => res.json())
            .then(result => {
                setDrivers(result)
            });
    }, []);
    return (
        <header>
            <div className="card" id={styles.standings}>

            <ul class="list-group list-group-flush">
                {drivers.map((driver)=> <li class="list-group-item">{driver.name}: {driver.rating}</li> )}
            </ul>
        </div>
        </header>
    )
}

export default VoteStandings