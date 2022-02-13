import "./TeamCard.css"
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
    let upButton = <button className="up" onClick={clickUp}>
        Up
    </button>
    let downButton = <button className="down" onClick={clickDown}>
        Down
    </button>
    let buttons = [upButton, downButton]
    let Voted = () => {
        if (isVoted) {
            return <p className="voted"> <strong>Thank you for voting!</strong></p>
        } else {
            return buttons
        }
    }
    return (
        <div className={`card--driver ${team.logocolor}`}>
            <div className="driver">
                <img class="logo-background"
                    src={`logos/${team.logocolor}.png`} />
                <img className="poster team"
                    src={`cars/${team.logocolor}.png`}
                    alt="" />
                <div className="info">
                    <h3 className="name">{team.name}</h3>
                    <p className="debut">Drivers: {team.drivers} </p>
                    <p className="team">Championships: {team.championships[0]} </p>
                    <p className="rating">
                    Rating: {rating}
                    </p>
                    <Link to={`pilots/${team._id}`}><button className="details">Details</button></Link>
                    {user ?
                        <Voted key={team._id} /> :
                        <Link to="/login" className="login-link" >  Please, login to vote!</Link>
                    }
                </div>
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