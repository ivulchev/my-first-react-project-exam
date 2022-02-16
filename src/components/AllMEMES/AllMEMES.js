
import MemeCard from "./MemeCard";
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
    return memes.length > 0 ? 
            <section className="meme-section">
                {memes.map((x) => <MemeCard key={x[0]} meme={x} />)}
            </section>: <Loading />
}

export default AllMEMES