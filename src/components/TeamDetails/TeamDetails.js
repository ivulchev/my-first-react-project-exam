import "./TeamDetails.css"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ErrorPage from "../Error/ErrorPage";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";
function TeamDetails() {
    let history = useHistory()
    const [team, setTeam] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}teams/${id}.json`)
            .then(res => res.json())
            .then(result => {
                if (result !== null) {
                    setTeam(result)
                    setIsLoaded(true)
                } else {
                    setIsError(true)
                }
            })
            .catch((function (error) {
                setIsError(true)
            }))
    }, []);
    return (isError ? <ErrorPage /> : <section className={`details--section ${team.logocolor}`}>
        {isLoaded ?
            <article className="details--article ">
                <h1 className="details--name">{team.name}</h1>
                <img className="details--image"
                    src={`${team.image}`} alt="team image"/>
                <div className="details--info">
                    <p className="details--team">Drivers: {team.drivers}</p>
                    <p className="details--number">Championships: {team.championships}</p>
                    <p className="details--debut">{team.description}</p>
                </div>
                <button onClick={() => history.goBack()} className={`details--button ${team.logocolor === "haas" ? "black" : null} ${team.logocolor}`} >Go Back</button>
            </article> : <Loading />}
    </section>)
}
export default TeamDetails