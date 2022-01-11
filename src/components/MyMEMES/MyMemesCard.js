import { Link } from "react-router-dom";
import styles from "./MyMEMES.module.css";
import * as requester from "../../services/requester";
import { useHistory } from "react-router";
import { endpoints } from "../../services/services";
import { useState } from "react";
import { useNotificationContext, types } from "../../contexts/NotificationContext";
import { Modal, Button } from "react-bootstrap";
function MyMemesCard({ meme }) {
    const [id, setId] = useState(meme[0]);
    const [memeInfo, setMemeInfo] = useState(meme[1]);
    const { addNotification } = useNotificationContext();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let history = useHistory()
    function deleteMeme() {
        requester.del(`${endpoints.baseUrl}memes/${id}.json`)
            .then(() => {
                addNotification("You succesfully delete you posts!", types.succes)
                handleClose()
                history.push("/posts/create")
            })
            .catch((function (error) {
                let errorMessage = error.message;
                handleClose()
                addNotification(errorMessage, types.error)
            }));
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
                <button className={styles.downBtn} onClick={handleShow}>
                    Delete
                </button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>F1 FanHome:</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete your post?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={deleteMeme}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MyMemesCard