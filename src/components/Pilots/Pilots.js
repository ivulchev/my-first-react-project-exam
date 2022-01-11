import Card from "./Card"
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
import styles from "./Pilots.module.css";
import Loading from "../Loading/Loading";

function Pilots() {
    const [pilots, setPilots] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}drivers.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                    setPilots(array)
            });
    },[]);
    return (
        <header id={styles.pilots}>
            <div className="row" >
                {(pilots.length > 0) ? pilots.map(x => <Card key={x._id} driver={x} />) : <Loading/>}
            </div>
        </header>
    )
}

export default Pilots