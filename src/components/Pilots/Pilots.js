
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";
import Card from "./Card";

function Pilots() {
    const [drivers, setPilots] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}drivers.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                    setPilots(array)
            });
    },[]);
    return (
        <section className="drivers">
                {(drivers.length > 0) ? drivers.map(x => <Card key={x._id} driver={x} />) : <Loading/>}
        </section>

    )
}

export default Pilots