import styles from "./Card.module.css"
import * as requester from "../../services/requester";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect, } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { endpoints } from "../../services/services";


function Card({ driver }) {
    const [rating, setRating] = useState(driver.rating);
    const { user } = useContext(AuthContext);

    function voteUp(e) {
        e.preventDefault();
        if (window.confirm("Do you really want to vote? You can vote only once per Driver!")) {
            requester.patch(`${endpoints.baseUrl}drivers/${driver._id}.json`, { rating: rating + 1, voters: [...driver.voters, localStorage.email] })
                .then(() => {
                    setRating(rating + 1);
                })
        }
    }
    function voteDown(e) {
        e.preventDefault();
        if (window.confirm("Do you really want to vote? You can vote only once per Driver!")) {
            requester.patch(`${endpoints.baseUrl}drivers/${driver._id}.json`, { rating: rating - 1, voters: [...driver.voters, localStorage.email] })
                .then(() => {
                    setRating(rating - 1);
                })

        }
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
    let upButton = <button className={styles.upBtn} onClick={voteUp}>
        Up
    </button>
    let downButton = <button className={styles.downBtn} onClick={voteDown}>
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
        </div>
    )
}


export default Card