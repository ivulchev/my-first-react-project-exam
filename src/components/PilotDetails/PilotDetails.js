import styles from "./PilotDetails.module.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ErrorPage from "../Error/ErrorPage";
import { useHistory } from "react-router";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";
function PilotDetails() {
    let history = useHistory()
    const [pilot, setPilot] = useState({})
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    let {id} = useParams()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}drivers/${id}.json`)
            .then(res => res.json())
            .then(result => {
                if(result !== null){
                    const timer = setTimeout(() => {
                        setPilot(result)
                        setIsLoaded(true)
                    }, 1000);
                }else{
                    setIsError(true)
                }
            })
            .catch((function (error) {
                setIsLoaded(false)
            }))
    },[]);
    return ( isError ? <ErrorPage/> : <div>
        {isLoaded ?
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
        </div> : <Loading/> }
        </div>
        
    )
}
export default PilotDetails