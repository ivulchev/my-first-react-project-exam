import styles from "./DriverStandings.module.css"
import { useEffect, useState } from "react";

function DriverStandings() { 
    const [first, setFirst] = useState([]);
    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/drivers`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                array.sort((a,b) => {
                    return b.rating - a.rating || a.name.localeCompare(b.name)
                } )
                setFirst(array[0])
                setDrivers(array)
            });
    }, []);
    return (
        <header>
            <div className="card" id={styles.standings}>
                <h3>Top Drivers</h3>
            <img src={first.logoUrl} alt="Card img cap" />
            <ul className="list-group list-group-flush">
                {(!drivers.length == 0)?
                <ul className="list-group list-group-flush">
                <li className="list-group-item" key={drivers[0]._id} ><strong>1st:</strong> {drivers[0].name}: <strong>{drivers[0].rating}</strong></li> 
                <li className="list-group-item" key={drivers[1]._id} ><strong>2nd:</strong> {drivers[1].name}: <strong>{drivers[1].rating}</strong></li> 
                <li className="list-group-item" key={drivers[2]._id} ><strong>3rd:</strong> {drivers[2].name}: <strong>{drivers[2].rating}</strong></li> 
                </ul>
                :
                <li>Loading...</li>}
            </ul>
        </div>
        </header>
    )
}

export default DriverStandings