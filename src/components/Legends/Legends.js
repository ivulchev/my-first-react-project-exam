import LegendsCard from "./LegendsCard"
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";
import styles from "./Legends.module.css";
function Legends() {
    const [legends, setLegends] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}legends.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                setLegends(array)

            });
    }, []);
    return (
        <header>
            <div className="row" id={styles.legends}>
                {(legends.length > 0) ? legends.map(x => <LegendsCard key={x._id} legend={x} />) : <Loading />}
            </div>
        </header>
    )
}

export default Legends