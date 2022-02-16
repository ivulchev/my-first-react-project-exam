import { Link } from "react-router-dom";
import "./MyMemes.css"
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
        <div className="meme--card my" >
            <h5 className="meme--title">{memeInfo.title} </h5>
            <img src={memeInfo.image}  alt="Card img cap" />
            <div className="meme--card--body">
            <p className="meme--rating"> <text>Created on: </text>{memeInfo.createdOn.slice(0, 24)}</p>
                <Link to={`/posts/my-posts/edit/${id}`} ><button  className="edit--btn">
                    Edit
                </button>
                </Link>
                <button  onClick={handleShow} className="delete--btn">
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