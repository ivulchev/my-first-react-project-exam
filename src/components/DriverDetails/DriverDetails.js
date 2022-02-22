import "./DriverDetails.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ErrorPage from "../Error/ErrorPage";
import { useHistory } from "react-router";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";
function DriverDetails() {
    let history = useHistory()
    const [driver, setDriver] = useState({})
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    let {id} = useParams()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}drivers/${id}.json`)
            .then(res => res.json())
            .then(result => {
                if(result !== null){
                        setDriver(result)
                        setIsLoaded(true)
                }else{
                    setIsError(true)
                }
            })
            .catch((function (error) {
                setIsLoaded(false)
            }))
    },[]);
    return ( isError ? <ErrorPage/> : <section className={`details--section ${driver.logocolor}`}>
        {isLoaded ?
        <article className="details--article ">
            <h1 className ="details--name">{driver.name}</h1>
            <img className = "details--image" src={driver.poster} className="details--image" alt="..."/>
            <div className="details--info">
            <p className ="details--team">Team: {driver.team}</p>
            <p className ="details--number">Number: {driver.number}</p>
            <p className ="details--nat">Nationality: {driver.nationality}</p>
            <p className ="details--debut">Debut: {driver.debut}</p>
            <p className ="details--bio">{driver.bio}</p>
            <p className ='details--bio'>{driver.future}</p>
            </div>
            <button onClick={() => history.goBack()} className ={`details--button ${driver.logocolor === "haas" ? "black" : null} ${driver.logocolor}`} >Go Back</button>
        </article> : <Loading/> }
        </section>
        
    )
}
export default DriverDetails