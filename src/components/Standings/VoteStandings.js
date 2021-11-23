import styles from "./VoteStandings.module.css"
import { useEffect, useState } from "react";

function VoteStandings() { 
    const [first, setFirst] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/data/pilots`)
            .then(res => res.json())
            .then(result => {
                result.sort((a,b) => {
                    return b.rating - a.rating
                } )
                setFirst(result[0])
            });
    }, []);
    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/data/pilots`)
            .then(res => res.json())
            .then(result => {
                result.sort((a,b) => {
                    return b.rating - a.rating
                } )
                setDrivers(result)
            });
    }, []);
    return (
        <header>
            <div className="card" id={styles.standings}>
                <h3>Top Drivers</h3>
            <img src={first.logoUrl} alt="Card img cap" />
            <ul className="list-group list-group-flush">
                {drivers.map((driver)=> <li className="list-group-item" key={driver._id} ><strong>{(drivers.indexOf(driver) + 1 )}:</strong> {driver.name}: {driver.rating}</li> )}
            </ul>
        </div>
        </header>
    )
}

export default VoteStandings