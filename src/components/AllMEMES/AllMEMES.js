import AllMemesCard from "./AllMemesCard";
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
function AllMEMES() {
    const [memes, setMemes] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}memes.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.entries(result)
                setMemes(array)
            });
    },[]);
    return (<div className="row" >
        {memes.map((x) => <AllMemesCard key={x._id} meme={x}/>)}
        </div>
    )
}

export default AllMEMES