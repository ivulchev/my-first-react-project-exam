import styles from "./EditMeme.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as requester from "../../services/requester";
import { useHistory } from "react-router";
import ErrorPage from "../Error/ErrorPage";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";
import { useNotificationContext, types } from "../../contexts/NotificationContext";

function EditMeme() {
    const { user } = useContext(AuthContext);
    const { addNotification } = useNotificationContext();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [isError, setIsError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    let { id } = useParams()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}memes/${id}.json`)
            .then(res => res.json())
            .then(result => {
                setTitle(result.title)
                setImage(result.image)
                setIsLoaded(true)
            })
            .catch((function (error) {
                setIsError(true)
            }))
    }, []);

    let history = useHistory()
    const onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let image = formData.get('image');
        if (title.length > 0 && image.length > 0) {
            if (window.confirm("Do you really want to edit this item?")) {
                requester.patch(`${endpoints.baseUrl}memes/${id}.json`, { title, image })
                    .then(() => {
                        history.push("/posts/my-posts")
                    })
                    .catch((function (error) { 
                        addNotification(error.message, types.error)
                    }))
            }

        } else {
            addNotification("Empty Fields!", types.warn)
        }
    }
    return (!user || isError ? <ErrorPage /> : <div>
        {isLoaded ?
            <form onSubmit={onSubmit} id={styles.editMeme}>
                <h1 id={styles.pageTitle}>Edit MEME</h1>
                <div className="form-group">
                    <label for="titleMEME" id={styles.pageTitle}>Title</label>
                    <input className="form-control" type="text" aria-label="default input example" value={title} name="title" onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className="form-group">
                    <label for="imageMEME" id={styles.pageTitle}>Image URL</label>
                    <input type="text" className="form-control" id={styles.input} value={image} name="image" onChange={(event) => setImage(event.target.value)} />
                </div>
                <button type="submit" className={styles.editBtn}>Edit</button>
                <button id={styles.back}><Link to="/posts/my-posts" id={styles.backLink}>Back</Link> </button>
            </form>
            : <Loading />}
    </div>
    )
}

export default EditMeme