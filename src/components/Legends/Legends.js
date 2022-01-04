import LegendsCard from "./LegendsCard"
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading"
function Legends() {
    const [legends, setLegends] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}legends.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                const timer = setTimeout(() => {
                    setLegends(array)
                }, 1500);
                
            });
    },[]);
    return (
        <header>
            <div className="row">
               {(legends.length > 0)?legends.map(x =><LegendsCard key={x._id} legend={x}/> ) : <Loading/>} 
            </div>
        </header>
    )
}

export default Legends