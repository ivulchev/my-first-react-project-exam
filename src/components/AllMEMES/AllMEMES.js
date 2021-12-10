import AllMemesCard from "./AllMemesCard";
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
function AllMEMES() {
    const [memes, setMemes] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}jsonstore/memes`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                setMemes(array)
            });
    },[]);
    return (<div className="row" >
        {memes.map((x) => <AllMemesCard key={x._id} meme={x}/>)}
        </div>
    )
}

export default AllMEMES