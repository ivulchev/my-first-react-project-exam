import "./EditMeme.css";
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
import { Modal, Button } from "react-bootstrap";

function EditMeme() {
    const { user } = useContext(AuthContext);
    const { addNotification } = useNotificationContext();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [isError, setIsError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [show, setShow] = useState(false);

    let { id } = useParams();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            requester.patch(`${endpoints.baseUrl}memes/${id}.json`, { title, image })
                .then(() => {
                    handleClose()
                    history.push("/posts/my-posts")
                })
                .catch((function (error) {
                    addNotification(error.message, types.error)
                }))
        } else {
            addNotification("Empty Fields!", types.warn)
        }
    }
    return (!user || isError ? <ErrorPage /> : <section className="edit--section">
        {isLoaded ?
            <form onSubmit={onSubmit} className="edit--form">
                <div className="form-group">
                    <h1 >Edit </h1>
                    <p>You can edit your posts more than once.</p>
                    <label for="titleMEME" >Title</label>
                    <input className="form-control" type="text" aria-label="default input example" value={title} name="title" onChange={(event) => setTitle(event.target.value)} />
                    <label for="imageMEME" >Image URL</label>
                    <input type="text" className="form-control" value={image} name="image" onChange={(event) => setImage(event.target.value)} />
                    <button type="submit" className="edit--btn" >Edit</button>
                    <button className="delete--btn"><Link to="/posts/my-posts" >Back</Link> </button>
                </div>
            </form>
            : <Loading />}
    </section>
    )
}

export default EditMeme