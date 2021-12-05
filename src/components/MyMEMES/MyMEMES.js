import MyMemesCard from "./MyMemesCard"
import { useEffect, useState } from "react";
import ErrorPage from "../Error/ErrorPage";
function MyMEMES() {
    const [myMemes, setMyMemes] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/memes`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                array = array.filter((meme) => meme._ownerId === localStorage._id)
                setMyMemes(array)
            });
    },[]);
    return ( myMemes === undefined ? <ErrorPage/>:
        <div className="row">
            {myMemes.map((x) => <MyMemesCard key={x._id} meme={x}/>)}
        </div>
    )
}

export default MyMEMES