import styles from "./VoteStandings.module.css"
import { useEffect, useState } from "react";

function VoteStandings() { 
    const [first, setFirst] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/drivers`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                array.sort((a,b) => {
                    return b.rating - a.rating
                } )
                setFirst(array[0])
            });
    }, []);
    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/drivers`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                array.sort((a,b) => {
                    return b.rating - a.rating
                } )
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
                <li className="list-group-item" key={drivers[0]._id} ><strong>1st:</strong> {drivers[0].name}: {drivers[0].rating}</li> 
                <li className="list-group-item" key={drivers[1]._id} ><strong>2nd:</strong> {drivers[1].name}: {drivers[1].rating}</li> 
                <li className="list-group-item" key={drivers[2]._id} ><strong>3rd:</strong> {drivers[2].name}: {drivers[2].rating}</li> 
                </ul>
                :
                <li>Loading...</li>}
            </ul>
        </div>
        </header>
    )
}

export default VoteStandings