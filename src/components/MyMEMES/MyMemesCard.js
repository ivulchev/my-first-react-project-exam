import { Link } from "react-router-dom";
import styles from "./MyMEMES.module.css";
import * as requester from "../../services/requester";
import { useHistory } from "react-router";
import { endpoints } from "../../services/services";
function MyMemesCard({ meme }) {
    let history = useHistory()
    function deleteMeme() {
        if(window.confirm("Do you really want to delete this item?")){
        requester.del(`${endpoints.baseUrl}jsonstore/memes/${meme._id}`)
        return history.push("/posts/create")
        }

    }
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={meme.image} id={styles.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{meme.title}</h5>
                <p className="rating">Rating: {meme.rating} </p>
                <Link to={`/posts/my-posts/edit/${meme._id}`} ><button className={styles.upBtn} >
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