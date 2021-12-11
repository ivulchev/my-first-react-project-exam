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
        fetch(`${endpoints.baseUrl}jsonstore/memes`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                array = array.filter((meme) => meme._ownerId === localStorage._id)
                setMyMemes(array)
            });
    },[]);
    return ( !user ? <ErrorPage/> :
        <div className="row">
            {myMemes.map((x) => <MyMemesCard key={x._id} meme={x}/>)}
        </div>
    )
}

export default MyMEMES