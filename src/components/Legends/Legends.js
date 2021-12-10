import LegendsCard from "./LegendsCard"
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
function Legends() {
    const [legends, setLegends] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}jsonstore/legends`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                setLegends(array)
            });
    },[]);
    return (
        <header>
            <div className="row">
               {legends.map(x =><LegendsCard key={x._id} legend={x}/> )}, 
            </div>
        </header>
    )
}

export default Legends