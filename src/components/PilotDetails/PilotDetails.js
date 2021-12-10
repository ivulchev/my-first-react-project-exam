import styles from "./PilotDetails.module.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ErrorPage from "../Error/ErrorPage";
import { useHistory } from "react-router";
import { endpoints } from "../../services/services";
function PilotDetails() {
    let history = useHistory()
    const [pilot, setPilot] = useState({})
    let {id} = useParams()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}jsonstore/drivers/${id}`)
            .then(res => res.json())
            .then(result => {
                setPilot(result)
            });
    },[]);
    return ( pilot.name === undefined ? <ErrorPage/> :
        <div className="card" id={styles.details} >
            <img src={pilot.logoUrl} className="card-img-top" alt="..."/>
            <div className ="card-body">
            <h5 className ="card-title">{pilot.name}</h5>
            <p className ="card-text">Number: {pilot.number}</p>
            <p className ="card-text">{pilot.description}</p>
            </div>
            
            <div className ="card-body">
            <button onClick={() => history.goBack()} className ="card-link" id={styles.goBack}>Go Back</button>
            </div> 
        </div> 
        
    )
}
export default PilotDetails