import MyMemesCard from "./MyMemesCard"
import { useEffect, useState } from "react";
import ErrorPage from "../Error/ErrorPage";
import { endpoints } from "../../services/services";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import Loading from "../Loading/Loading";
import "./MyMEMES.css";
function MyMEMES() {
    const {user} = useContext(AuthContext);
    const [myMemes, setMyMemes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch(`${endpoints.baseUrl}memes.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.entries(result)
                array = array.filter((meme) => meme[1]._ownerId === localStorage._id)
                setMyMemes(array)
                setIsLoaded(true)
            })
            .catch(()=>{
                return <ErrorPage/>
            })
    },[]);
    return ( !user ? <ErrorPage/> :
        <section className="my-memes-section">
            {isLoaded ?(myMemes.length > 0 ? myMemes.map((x) => <MyMemesCard key={x[0]} meme={x}/>) : <h1 className="no--memes">You don't have any posts!</h1> ) : <Loading/>}
        </section>
    )
}

export default MyMEMES