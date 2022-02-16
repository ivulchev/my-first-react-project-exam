import styles from "./CreateMeme.module.css";
import { services } from "../../services/services";
import { useHistory } from "react-router";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import ErrorPage from "../Error/ErrorPage";
import { useNotificationContext, types } from "../../contexts/NotificationContext";

function CreateMeme() {
    const { user } = useContext(AuthContext);
    const {addNotification} = useNotificationContext();
    let history = useHistory()
    const onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let imageUrl = formData.get('imageUrl');
        if (title.length > 0 && imageUrl.length > 0) {
            services.createMEME(localStorage._id, title, imageUrl, user)
                .then(() => {
                        history.push("/posts/all")      
                })
                .catch((function (error) { 
                    addNotification(error.message, types.error)
                }))
        } else {
            addNotification("Empty Fields!", types.warn)
        }
    }
    return (!user ? <ErrorPage /> :
        <form onSubmit={onSubmit} id={styles.createMeme}>
            <h1 id={styles.pageTitle}>Create MEME</h1>
            <div className="form-group">
                <label htmlFor="titleMEME" id={styles.pageTitle}>Title</label>
                <input type="title" className="form-control" id="titleMEME" name="title" placeholder="Add Title" />
            </div>
            <div className="form-group">
                <label htmlFor="imageMEME" id={styles.pageTitle}>Image URL</label>
                <input type="text" className="form-control" id="imageMEME" name="imageUrl" placeholder="Add image URL " />
            </div>
            <button type="submit" className={styles.createBtn}>Submit</button>
        </form>
    )
}

export default CreateMeme
