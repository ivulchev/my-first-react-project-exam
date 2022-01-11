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
                array.sort((a, b) => {
                    return b.rating - a.rating || a.name.localeCompare(b.name)
                })
                setFirst(array[0])
                setLegends(array)
            });
    }, []);
    return (
        <header>
            <div className="card" id={styles.standings}>
                <h3>Top Legends</h3>
                {<img src={first.image} id={styles.img} />}
                <ul className="list-group list-group-flush">
                    <ul className="list-group list-group-flush">
                        {(!legends.length == 0) ? <li className="list-group-item" id={styles.list} key={legends[0]._id} > <strong>1st: </strong>  <Link id={styles.names} to={`/legends/${legends[0]._id}`} className="card-link">{legends[0].name}</Link>: <strong>{legends[0].rating}</strong></li> : <li id={styles.list} className="list-group-item" ><li id={styles.names} className="card-link">Loading...</li></li>}
                        {(!legends.length == 0) ? <li className="list-group-item" id={styles.list} key={legends[1]._id} ><strong>2nd: </strong> <Link id={styles.names} to={`/legends/${legends[1]._id}`} className="card-link">{legends[1].name}</Link>: <strong>{legends[1].rating}</strong></li> : <li id={styles.list} className="list-group-item" ><li id={styles.names} className="card-link">Loading...</li></li>}
                        {(!legends.length == 0) ? <li className="list-group-item" id={styles.listCutted} key={legends[2]._id} ><strong>3rd: </strong> <Link id={styles.names} to={`/legends/${legends[2]._id}`} className="card-link">{legends[2].name}</Link>: <strong>{legends[2].rating}</strong></li> : <li id={styles.listCutted} className="list-group-item" ><li id={styles.names} className="card-link">Loading...</li></li>}
                    </ul>
                </ul>
            </div>
        </header>
    )
}

export default LegendsStandings