import Card from "./Card"
import { useEffect, useState } from "react";


function Pilots() {
    const [pilots, setPilots] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/drivers`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                setPilots(array)
            });
    },[]);
    return (
        <header>
            <div className="row">
                {pilots.map(x => <Card key={x._id} driver={x} />)}
            </div>
        </header>
    )
}

export default Pilots