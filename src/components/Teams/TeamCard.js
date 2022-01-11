import styles from "./TeamCard.module.css";
import { Link} from "react-router-dom";
import * as requester from "../../services/requester";
import { useState, } from "react";
import { useEffect } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { endpoints } from "../../services/services";
import { Modal, Button } from "react-bootstrap";


function TeamCard({ team }) {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(team.rating);
    const [show, setShow] = useState(false);
    const [upDown, setUpDown] = useState("");
    function clickUp(){
        handleShow()
        setUpDown("Up")
    }
    function clickDown(){
        handleShow()
        setUpDown("Down")
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function voteUp(e) {
        e.preventDefault();
        requester.patch(`${endpoints.baseUrl}teams/${team._id}.json`, { rating: rating + 1, voters: [...team.voters, user]})
        .then(() => {
            setRating(rating + 1);
            handleClose()
        })
        
    }
    function voteDown(e) {
        e.preventDefault();
        requester.patch(`${endpoints.baseUrl}teams/${team._id}.json`, { rating: rating - 1, voters: [...team.voters, user]})
        .then(() => {
        setRating(rating - 1);
        handleClose()
        })
    }
    const [isVoted, setIsVoted] = useState()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}teams/${team._id}.json`)
            .then((res) => res.json())
            .then((data) => {
                let array = data.voters
                if (array.includes(user)) {
                    return setIsVoted(true)
                } else {
                    return setIsVoted(false)
                }
            })
    }, [rating])
    let upButton = <button className={styles.upBtn} onClick={clickUp}>
        Up
    </button>
    let downButton = <button className={styles.downBtn} onClick={clickDown}>
        Down
    </button>
    let buttons = [upButton, downButton]
    let Voted = () => {
        if (isVoted) {
            return <p id={styles.loginLink}> <strong>Thank you for voting!</strong></p>
        } else {
            return buttons
        }
    }
    return (
        <div className="card" id={styles.cardPartial}>
            <div className="card-body" id={styles.body}>
            <img src={team.image} id={styles.img} alt="Card img cap" />
                <h5 className="card-title" id={styles.title}>{team.name}</h5>
                <p className="card-text" id={styles.text} ><strong>Drivers:</strong> {team.drivers}</p>
                <p className="card-text" id={styles.text} ><strong>Constructor Championships:</strong> {team.championships}</p>
                <p className="rating">Rating: {rating} </p>
                <button className={styles.detailsBtn} > <Link to={`/teams/${team._id}`} id={styles.detailsText} >
                    Details
                    </Link>
                </button>
                {user ?
                <Voted key={team._id}/> :
                <Link to="/login" id={styles.loginLink}>  Please, login to vote!</Link>}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>F1 FanHome:</Modal.Title>
                </Modal.Header>
                <Modal.Body>You can vote only once per team! Do you really want to proceed?</Modal.Body>
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
export default TeamCard