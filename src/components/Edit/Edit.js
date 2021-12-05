import styles from "./EditMeme.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as requester from "../../services/requester";
import { useHistory } from "react-router";
import ErrorPage from "../Error/ErrorPage";
function EditMeme() {
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    let {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/memes/${id}`)
            .then(res => res.json())
            .then(result => {
                setTitle(result.title)
                setImage(result.image)
            });
    },[]);

    let history = useHistory()
    const onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let image = formData.get('image');
        if (title.length > 0 && image.length > 0) {
            requester.put(`http://localhost:3030/jsonstore/memes/${id}`, { title, image})
            .then(() => {
                history.push("/posts/my-posts")
            })
            
            
        } else {
            window.alert("Empty Fields!")
        }
    }
    return ( title === undefined ? <ErrorPage/> :
        <form onSubmit={onSubmit} id={styles.editMeme}>
            <h1 id={styles.pageTitle}>Edit MEME</h1>
            <div className="form-group">
                <label for="titleMEME" id={styles.pageTitle}>Title</label>
                <input className="form-control" type="text" aria-label="default input example" value={title? title : "Loading"} name="title" />
            </div>
            <div className="form-group">
                <label for="imageMEME" id={styles.pageTitle}>Image URL</label>
                <input type="text" className="form-control" id={styles.input} value={image? image : "Loading"} name="image"/>
            </div>
            <button type="submit" className={styles.editBtn}>Edit</button>
            <Link to="/posts/my-posts" className ={styles.backLink}>Go Back</Link>
        </form>
    )
}

export default EditMeme