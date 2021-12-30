import styles from "./LegendsStandings.module.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { endpoints } from "../../services/services";

function LegendsStandings() { 
    const [first, setFirst] = useState([]);
    const [legends, setLegends] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}legends.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                array.sort((a,b) => {
                    return b.rating - a.rating || a.name.localeCompare(b.name)
                } )
                setFirst(array[0])
                setLegends(array)
            });
    }, []);
    return (
        <header>
            <div className="card" id={styles.standings}>
                <h3>Top Legends</h3>
            <img src={first.image} id={styles.img} alt="Card img cap" />
            <ul className="list-group list-group-flush">
                {(!legends.length == 0)?
                <ul className="list-group list-group-flush">
                <li className="list-group-item" key={legends[0]._id} ><strong>1st:</strong> <Link id={styles.names} to={`/legends/${legends[0]._id}`} className="card-link">{legends[0].name}</Link>: <strong>{legends[0].rating}</strong></li> 
                <li className="list-group-item" key={legends[1]._id} ><strong>2nd:</strong> <Link id={styles.names} to={`/legends/${legends[1]._id}`} className="card-link">{legends[1].name}</Link>: <strong>{legends[1].rating}</strong></li> 
                <li className="list-group-item" key={legends[2]._id} ><strong>3rd:</strong> <Link id={styles.names} to={`/legends/${legends[2]._id}`} className="card-link">{legends[2].name}</Link>: <strong>{legends[2].rating}</strong></li> 
                </ul>
                :
                <li>Loading...</li>}
            </ul>
        </div>
        </header>
    )
}

export default LegendsStandings