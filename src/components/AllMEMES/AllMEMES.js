import AllMemesCard from "./AllMemesCard";
import styles from "./AllMEMES.module.css"
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";

function AllMEMES() {
    const [sortBy, setSortbBy] = useState("popular");
    const [memes, setMemes] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}memes.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.entries(result)
                if (sortBy === "popular") {
                    array.sort((a, b) => {
                        return b[1].rating - a[1].rating || a[1].title.localeCompare(b[1].title)
                    })
                } else if (sortBy === "date") {
                    array.sort((a, b) => {
                        return b[1].createdOn.localeCompare(a[1].createdOn)
                    })
                };
                setMemes(array)
            })
    }, [sortBy]);
    return (
        (memes.length > 0) ? <div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons" >
                <label className={"btn btn-secondary " + (sortBy === "popular" ? "active" : null)} id={styles.radio}>
                    <input type="radio" name="options" id="option1" autocomplete="off" checked={() => { setSortbBy("popular") }} onClick={() => setSortbBy("popular")} /> Sort by Rating
                </label>
                <label className={"btn btn-secondary " + (sortBy === "date" ? "active" : null)} id={styles.radio}>
                    <input type="radio" name="options" id="option2" autocomplete="off" checked={() => { setSortbBy("date") }} onClick={() => setSortbBy("date")} /> Sort by Date
                </label>
            </div>
            <div className="row" >
                {memes.map((x) => <AllMemesCard key={x[0]} meme={x} />)}
            </div>
        </div> : <Loading />
    )
}

export default AllMEMES