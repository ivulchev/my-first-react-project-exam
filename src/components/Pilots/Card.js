// import styles from "./Card.module.css"
import * as requester from "../../services/requester";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect, } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { endpoints } from "../../services/services";
import { Modal, Button } from "react-bootstrap"

import "./Card.css";


function Card({ driver }) {

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
    let upButton = <button className="up" onClick={clickUp}><i className="fa-solid fa-thumbs-up"></i> Up</button>
    let downButton = <button className="down" onClick={clickDown}><i className="fa-solid fa-thumbs-down"></i> Down</button>
    let buttons = [upButton, downButton]
    let Voted = () => {
        if (isVoted) {
            return <p className="voted"> Thank you for voting!</p>
        } else {
            return buttons
        }
    }
    return (
        <div className={`card--driver ${driver.logocolor}`}>
            <div className="driver">
                <img class="logo-background"
                    src={`logos/${driver.logocolor}.png`} />
                <img className="poster"
                    src={driver.transparent}
                    alt="" />
                <div className="info">
                    <h3 className="name">{driver.name}</h3>
                    <p className="debut">Debut: {driver.debut} </p>
                    <p className="team">Team:  {driver.team} </p>
                    <p className="number">
                    Number: {driver.number}
                    </p>
                    <p className="rating">
                    Rating: {rating}
                    </p>
                    <Link to={`pilots/${driver._id}`}><button className="details">Details</button></Link>
                    {user ?
                        <Voted key={driver._id} /> :
                        <Link to="/login" className="login-link" >  Please, login to vote!</Link>
                    }
                </div>
            </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
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