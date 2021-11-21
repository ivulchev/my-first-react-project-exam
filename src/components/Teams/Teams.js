import TeamCard from "./TeamCard";
import { useEffect, useState } from "react";

function Teams() {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/data/teams`)
            .then(res => res.json())
            .then(result => {
                setTeams(result)
            });
    },[]);
    return (
        <header>
            <div className="row">
               {teams.map(x => <TeamCard key={x._id} team={x}/> )}
            </div>
        </header>
    )
}

export default Teams