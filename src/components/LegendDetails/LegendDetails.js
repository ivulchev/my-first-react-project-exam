import styles from "./LegendDetails.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ErrorPage from "../Error/ErrorPage";
function LegendDetails() {
    let history = useHistory()
    const [legend, setLegend] = useState({})
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/legends/${id}`)
            .then(res => res.json())
            .then(result => {
                setLegend(result)
            });
    }, []);
    return (legend.name === undefined ? <ErrorPage /> :
        <div className="card" id={styles.details} >
            <img src={legend.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{legend.name}</h5>
                <p className="card-text">{legend.teams}</p>
                <p className="card-text">{legend.description}</p>
            </div>

            <div className="card-body">
            <button onClick={() => history.goBack()} className ="card-link" id={styles.goBack}>Go Back</button>
            </div>
        </div>
    )
}
export default LegendDetails