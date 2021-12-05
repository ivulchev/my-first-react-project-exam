import styles from "./TeamDetails.module.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";
function TeamDetails() {
    const [team, setTeam] = useState({})
    let {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/teams/${id}`)
            .then(res => res.json())
            .then(result => {
                setTeam(result)
            });
    },[]);
    return (team.name === undefined ? <ErrorPage/> :
        <div className="card" id={styles.details} >
            <img src={team.image} className="card-img-top" alt="..."/>
            <div className ="card-body">
            <h5 className ="card-title">{team.name}</h5>
            <p className ="card-text">Drivers: {team.drivers}</p>
            <p className ="card-text">Constructor Championships: {team.championships}</p>
            <p className ="card-text">History: {team.history}</p>
            </div>
            
            <div className ="card-body">
            <Link to="/teams" className ="card-link">Go Back</Link>
            </div>
        </div>
    )
}
export default TeamDetails