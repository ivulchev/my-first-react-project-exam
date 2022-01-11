import styles from "./Card.module.css"
import * as requester from "../../services/requester";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect, } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { endpoints } from "../../services/services";
import { Modal, Button } from "react-bootstrap"


function Card({ driver }) {
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
    
    const [rating, setRating] = useState(driver.rating);
    const { user } = useContext(AuthContext);
    function voteUp(e) {
        e.preventDefault();
            requester.patch(`${endpoints.baseUrl}drivers/${driver._id}.json`, { rating: rating + 1, voters: [...driver.voters, localStorage.email] })
                .then(() => {
                    setRating(rating + 1);
                    handleClose()
                })
    }
    function voteDown(e) {
        e.preventDefault();
            requester.patch(`${endpoints.baseUrl}drivers/${driver._id}.json`, { rating: rating - 1, voters: [...driver.voters, localStorage.email] })
                .then(() => {
                    setRating(rating - 1);
                    handleClose()
                })
    }
    const [isVoted, setIsVoted] = useState(Boolean)
    useEffect(() => {
        fetch(`${endpoints.baseUrl}drivers/${driver._id}.json`)
            .then((res) => res.json())
            .then((data) => {
                let array = data.voters
                if (array.includes(user)) {
                    setIsVoted(true)
                } else {
                    setIsVoted(false)
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
            <img src={driver.logoUrl} alt="Card img cap" id={styles.image} />
                <h5 className="card-title">{driver.name}</h5>
                <p className="card-title" id={styles.description}>Team: {driver.team} </p>
                <p className="card-text" id={styles.description} >{driver.description}</p>
                <p className="rating">Rating: {rating} </p>
                <button className={styles.detailsBtn} ><Link to={`pilots/${driver._id}`} id={styles.details} >
                    Details
                </Link></button>
                {user ?
                    <Voted key={driver._id} /> :
                    <Link to="/login" id={styles.loginLink}>  Please, login to vote!</Link>
                }

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>F1 FanHome:</Modal.Title>
                </Modal.Header>
                <Modal.Body>You can vote only once per driver! Do you really want to proceed?</Modal.Body>
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


export default Card