import { Link } from "react-router-dom";
import styles from "./MyMEMES.module.css";
import * as requester from "../../services/requester";
import { useHistory } from "react-router";
import { endpoints } from "../../services/services";
import { useState } from "react";
import {useNotificationContext, types} from "../../contexts/NotificationContext"
function MyMemesCard({ meme }) {
    const [id, setId] = useState(meme[0]);
    const [memeInfo, setMemeInfo] = useState(meme[1]);
    const {addNotification} = useNotificationContext();
    let history = useHistory()
    function deleteMeme() {
        if(window.confirm("Do you really want to delete this item?")){
        requester.del(`${endpoints.baseUrl}memes/${id}.json`)
        addNotification("You succesfully delete you posts!", types.succes)
        history.push("/posts/create")
        }

    }
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={memeInfo.image} id={styles.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{memeInfo.title}</h5>
                <p className="rating">Rating: {memeInfo.rating} </p>
                <Link to={`/posts/my-posts/edit/${id}`} ><button className={styles.upBtn} >
                    Edit
                </button>
                </Link>
                <button className={styles.downBtn} onClick={deleteMeme}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default MyMemesCard