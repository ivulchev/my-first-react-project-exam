import Card from "./Card"
//import getAllPilots from "../../services/f1Services";
import { useEffect, useState } from "react";


function Pilots() {
    const [pilots, setPilots] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/data/pilots`)
            .then(res => res.json())
            .then(result => {
                setPilots(result)
            });
    },[]);
    return (
        <header>
            <div className="row">
                {pilots.map(x => <Card key={x._id} pilot={x} />)}
            </div>
        </header>
    )
}

export default Pilots