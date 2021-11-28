import AllMemesCard from "./AllMemesCard";
import { useEffect, useState } from "react";
function AllMEMES() {
    const [memes, setMemes] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/memes`)
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