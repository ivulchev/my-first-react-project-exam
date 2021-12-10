import TeamCard from "./TeamCard";
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";

function Teams() {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}jsonstore/teams`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                setTeams(array)
            });
    },[]);
    return (
        <header>
            <div className="row" >
               {teams.map(x => <TeamCard key={x._id} team={x}/> )}
            </div>
        </header>
    )
}

export default Teams