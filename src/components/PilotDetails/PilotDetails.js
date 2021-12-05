import styles from "./PilotDetails.module.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
function PilotDetails() {
    const [pilot, setPilot] = useState({})
    let {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/drivers/${id}`)
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
            <Link to="/pilots" className ="card-link">Go Back</Link>
            </div>
        </div> 
        
    )
}
export default PilotDetails