import "./AllMemes.css"
import MemeCard from "./MemeCard";
import { useEffect, useState } from "react";
import { endpoints } from "../../services/services";
import Loading from "../Loading/Loading";
import { Modal, Button } from "react-bootstrap";
import { useNotificationContext, types } from "../../contexts/NotificationContext";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { services } from "../../services/services";

function AllMEMES() {
    const [sortBy, setSortbBy] = useState("newest");
    const [memes, setMemes] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const { user } = useContext(AuthContext);
    const { addNotification } = useNotificationContext();

    const onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let imageUrl = formData.get('imageUrl');
        console.log(title, imageUrl)
        if (title.length > 0 && imageUrl.length > 0) {
            services.createMEME(localStorage._id, title, imageUrl, user)
                .then(() => {
                    handleClose()
                })
                .catch((function (error) {
                    addNotification(error.message, types.error)
                }))
        } else {
            addNotification("Empty Fields!", types.warn)
        }
    }

    useEffect(() => {
        fetch(`${endpoints.baseUrl}memes.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.entries(result)
                if (sortBy === "popular") {
                    array.sort((a, b) => {
                        return b[1].likes.length - a[1].likes.length || a[1].title.localeCompare(b[1].title)
                    })
                } else if (sortBy === "newest") {
                    array.sort((a, b) => {
                        return new Date(b[1].createdOn) - new Date(a[1].createdOn);
                    })
                } else if (sortBy === "comments") {
                    array.sort((a, b) => {
                        return b[1].comments.length - a[1].comments.length || a[1].title.localeCompare(b[1].title)
                    })
                }
                setMemes(array)
            })
    }, [sortBy, show]);
    return memes.length > 0 ?
        <section className="meme-section">
            <div className="all-meme-buttons">
                <section className="btn-group" role="group" >
                    <h4 className="sort-by">SORT BY:</h4>
                    <button className={`btn-date ${sortBy === "newest" ? "newest" : null}`} onClick={() => setSortbBy("newest")} >Newest</button>
                    <button className={`btn-popular ${sortBy === "popular" ? "popular" : null}`} onClick={() => setSortbBy("popular")}> Likes</button>
                    <button className={`btn-comments most-${sortBy === "comments" ? "comments" : null}`} onClick={() => setSortbBy("comments")}>Comments</button>
                </section>
                <button className="create-meme" onClick={() => setShow(true)}><i class="fa-solid fa-circle-plus"></i> Create</button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <form onSubmit={onSubmit} >
                    <Modal.Header closeButton>
                        <Modal.Title><input type="title" className="form-control" name="title" placeholder="Title here ..." /></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" className="form-control" name="imageUrl" placeholder="Image URl here ..." />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" >
                            Post
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
            {memes.map((x) => <MemeCard key={x[0]} meme={x} />)}
        </section> : <Loading />
}

export default AllMEMES