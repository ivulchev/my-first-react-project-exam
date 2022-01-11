import styles from "./LegendDetails.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ErrorPage from "../Error/ErrorPage";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";
function LegendDetails() {
    let history = useHistory()
    const [legend, setLegend] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    let { id } = useParams()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}legends/${id}.json`)
            .then(res => res.json())
            .then(result => {
                if (result !== null) {
                    setLegend(result)
                    setIsLoaded(true)
                } else {
                    setIsError(true)
                }
            })
            .catch((function (error) {
                setIsLoaded(false)
            }))
    }, []);
    return (isError ? <ErrorPage /> : <div>
        {isLoaded ?
            <div className="card" id={styles.details} >
                <img src={legend.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{legend.name}</h5>
                    <p className="card-text">{legend.teams}</p>
                    <p className="card-text">{legend.description}</p>
                </div>

                <div className="card-body">
                    <button onClick={() => history.goBack()} className="card-link" id={styles.goBack}>Go Back</button>
                </div>
            </div>
            : <Loading />}
    </div>
    )
}
export default LegendDetails