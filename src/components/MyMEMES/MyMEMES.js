import MyMemesCard from "./MyMemesCard"
import { useEffect, useState } from "react";
import ErrorPage from "../Error/ErrorPage";
import { endpoints } from "../../services/services";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
function MyMEMES() {
    const {user} = useContext(AuthContext);
    const [myMemes, setMyMemes] = useState([]);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}memes.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.entries(result)
                array = array.filter((meme) => meme[1]._ownerId === localStorage._id)
                setMyMemes(array)
            });
    },[]);
    return ( !user ? <ErrorPage/> :
        <div className="row">
            {myMemes.map((x) => <MyMemesCard key={x[0]} meme={x}/>)}
        </div>
    )
}

export default MyMEMES