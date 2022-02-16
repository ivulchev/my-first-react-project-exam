import "./MemeCard.css"
import { Link } from "react-router-dom";
import * as requester from "../../services/requester";
import { useState, useEffect, useContext } from "react";
import { endpoints } from "../../services/services";
import { AuthContext } from "../../contexts/AuthContext";
import { Modal, Button } from "react-bootstrap";
import { useNotificationContext, types } from "../../contexts/NotificationContext";


function MemeCard({ meme }) {
    const [id, setId] = useState(meme[0]);
    const [memeInfo, setMemeInfo] = useState(meme[1])
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(meme[1].rating);
    const [comments, setComm] = useState([meme[1].comments]);
    const [showConfirm, setShow] = useState(false);
    const [showVotes, setShowVotes] = useState(false);
    const { addNotification } = useNotificationContext();

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
    const onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget);
        let comment = formData.get('comment');
        if (comment.length > 0) {
            requester.patch(`${endpoints.baseUrl}memes/${id}.json`, { comments: [...memeInfo.comments, [user, comment]] })
                .then(() => {
                    e.target.reset()
                })
                .catch((function (error) {
                    addNotification(error.message, types.error)
                }))
        } else {
            addNotification("Write something!", types.warn)
        }
    }
    const [isOwner, setIsOwner] = useState()
    const [isVoted, setIsVoted] = useState()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}memes/${id}.json`)
            .then((res) => res.json())
            .then((data) => {
                setComm(data.comments)
                if ((data.likes).includes(user)) {
                    setIsVoted(true)
                } else {
                    setIsVoted(false)
                }
                if ((data._ownerId === localStorage._id)) {
                    setIsOwner(true)
                }
            })
    }, [comments])


    let upButton = <button className="heart-like" onClick={handleShow}><i class="fa-regular fa-heart"></i></button>


    let Voted = () => {
        if (isOwner) {
            return <p>You can't vote on your own posts!</p>
        } else {
            if (isVoted) {
                return <p className="meme--likes"><i class="fa-solid fa-heart"></i> {memeInfo.likes.length > 0 ? <p> <text> Liked by</text> {memeInfo.likes[1]} <a className="and--others" onClick={() => setShowVotes(true)}> {memeInfo.likes.length > 2 ? <text> and {memeInfo.likes.length - 2} others </text> : null} </a> </p> : null}</p>
            } else {
                return <p className="meme--likes">{upButton} {memeInfo.likes.length > 1 ? <p> <text> Liked by</text> {memeInfo.likes[1]} <a className="and--others" onClick={() => setShowVotes(true)}> {memeInfo.likes.length - 2 > 0 ? <text> and {memeInfo.likes.length - 2} others </text> : null} </a> </p> : null}</p>
            }
        }

    }
    return (
        <div className="meme--card" >
            <h5 className="meme--title">{memeInfo.title} </h5>
            <img src={memeInfo.image} alt="Card img cap" />
            <div className="meme--card--body">
                {user ?
                    <Voted /> :
                    <Link to="/login">  Please, login to vote!</Link>}
                <p className="creator"><text>Created by:</text> {memeInfo.creator}</p>
                <p className="meme--rating"> <text>Created on: </text>{memeInfo.createdOn.slice(0, 24)}</p>
                {comments ? <p className="comments-section"> <text>Comments: </text>{comments.map((c) => comments.indexOf(c) > 0 ? <p className="comments"><text>{c[0]}:</text> {c[1]}</p> : null)}</p> : null}
                {user ? <form onSubmit={onSubmit} className="form-group" >
                    <input type="title" className="form-control" id="comment" name="comment" placeholder="Write your comment here ..." />
                    <button type="submit" className="comment-btn">Post</button>
                </form> : <Link to="/login">  Please, login to comment!</Link>}

            </div>
            <Modal show={showConfirm} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>F1 FanHome:</Modal.Title>
                </Modal.Header>
                <Modal.Body>You can vote only once per post! Do you really want to proceed?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={voteUp}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showVotes} onHide={handleClose} className="voted--by">
                <Modal.Header closeButton>
                    <Modal.Title>Likes:</Modal.Title>
                    <Button className="close-btn" variant="secondary" onClick={() => setShowVotes(false)}>
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>{memeInfo.likes.map((u) => u.length > 1 && memeInfo.likes.indexOf(u) > 1 ? <i class="fa-solid fa-user-large"> <text> {u}</text></i> : null)}</Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MemeCard