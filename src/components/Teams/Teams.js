import TeamCard from "./TeamCard";
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";

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
        <section className="drivers">
                {(teams.length > 0) ? teams.map(x => <TeamCard key={x._id} team={x} />) : <Loading/>}
        </section>
    )
}

export default Teams