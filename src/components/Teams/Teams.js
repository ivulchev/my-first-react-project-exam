import TeamCard from "./TeamCard";
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";
import styles from "./Teams.module.css"

function Teams() {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}teams.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                setTeams(array)
            });
    }, []);
    return (
        <header>
            <div className="row" id={styles.teams}>
                {(teams.length > 0) ? teams.map(x => <TeamCard key={x._id} team={x} />) : <Loading />}
            </div>
        </header>
    )
}

export default Teams