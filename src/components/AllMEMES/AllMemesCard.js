import "./AllMEMES.css"
import { Link } from "react-router-dom";
import * as requester from "../../services/requester";
import { useState, useEffect, useContext } from "react";
import { endpoints } from "../../services/services";
import { AuthContext } from "../../contexts/AuthContext";
import { Modal, Button } from "react-bootstrap";


function AllMemesCard({ meme }) {
    const [id, setId] = useState(meme[0]);
    const [memeInfo, setMemeInfo] = useState(meme[1])
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(meme[1].rating);
    const [show, setShow] = useState(false);
    const [upDown, setUpDown] = useState("");
    function clickUp() {
        handleShow()
        setUpDown("Up")
    }
    function clickDown() {
        handleShow()
        setUpDown("Down")
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function voteUp(e) {
        e.preventDefault();
        requester.patch(`${endpoints.baseUrl}memes/${id}.json`, { rating: rating + 1, voters: [...memeInfo.voters, user], likes: [...memeInfo.likes, user] })
            .then(() => {
                setRating(rating + 1);
                handleClose();
            })
    }
    function voteDown(e) {
        e.preventDefault();
        requester.patch(`${endpoints.baseUrl}memes/${id}.json`, { rating: rating - 1, voters: [...memeInfo.voters, user] })
            .then(() => {
                setRating(rating - 1);
                handleClose();
            })
    }
    const [isOwner, setIsOwner] = useState()
    const [isVoted, setIsVoted] = useState()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}memes/${id}.json`)
            .then((res) => res.json())
            .then((data) => {
                if ((data.voters).includes(user)) {
                    setIsVoted(true)
                } else {
                    setIsVoted(false)
                }
                if ((data._ownerId === localStorage._id)) {
                    setIsOwner(true)
                }
            })
    }, [rating])


    let upButton = <button className="up" onClick={clickUp}>
        Up
    </button>
    let downButton = <button className="down" onClick={clickDown}>
        Down
    </button>
    let buttons = [upButton, downButton]

    let Voted = () => {
        if (isOwner) {
            return <p > <strong>You can't vote on you own posts!</strong></p>
        } else {
            if (isVoted) {
                return <p > <strong>Thank you for voting!</strong></p>
            } else {
                return buttons
            }
        }

    }
    return (
        <div className="meme--card" >
            <h5 className="meme--title">{memeInfo.title} </h5>
            <img src={memeInfo.image} alt="Card img cap" />
            <div className="meme--card--body">
                <p className="creator"><text>Created by:</text> {memeInfo.creator}</p>
                {user ?
                    <Voted /> :
                    <Link to="/login">  Please, login to vote!</Link>}
                <p className="meme--rating"> <text>Rating:</text> {rating}</p>
                <p className="meme--likes"><text>Liked by</text> {memeInfo.likes.join(" ")}</p>
                <p className="meme--dislikes"><text>Disliked by</text> {memeInfo.dislikes.join(" ")}</p>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>F1 FanHome:</Modal.Title>
                </Modal.Header>
                <Modal.Body>You can vote only once per post! Do you really want to proceed?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={upDown === "Up" ? voteUp : voteDown}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AllMemesCard