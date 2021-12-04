import styles from "./Card.module.css"
import * as requester from "../../services/requester";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
function Card({ driver }) {
    const [rating, setRating] = useState(driver.rating);
    function voteUp(e) {
        e.preventDefault();
        requester.put(`http://localhost:3030/jsonstore/drivers/${driver._id}`, { name: driver.name, team: driver.team, logoUrl: driver.logoUrl, number: driver.number, description: driver.description, rating: rating + 1, voters: [...driver.voters, localStorage._id], _id: driver._id })
        return setRating(rating + 1);
    }
    function voteDown(e) {
        e.preventDefault();
        requester.put(`http://localhost:3030/jsonstore/drivers/${driver._id}`, { name: driver.name, team: driver.team, logoUrl: driver.logoUrl, number: driver.number, description: driver.description, rating: rating - 1, voters: [...driver.voters, localStorage._id], _id: driver._id })
        return setRating(rating - 1);
    }
    const [isVoted, setIsVoted] = useState()
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/drivers/${driver._id}`)
            .then((res) => res.json())
            .then((data) => {
                let array = Object.values(data)
                if (array[6].includes(localStorage._id)) {
                    return setIsVoted(true)
                } else {
                    return setIsVoted(false)
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
            <img src={driver.logoUrl} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{driver.name}</h5>
                <p className="card-title">Team: {driver.team} </p>
                <p className="card-text" id={styles.description} >{driver.description}</p>
                <p className="rating">Rating: {rating} </p>
                <button className={styles.detailsBtn} ><Link to={`/pilots/${driver._id}`} id={styles.loginLink} >
                    Details
                </Link></button>
                {localStorage.email ?
                    <Voted key="1" /> :
                    <Link to="/login" id={styles.loginLink}>  Please, login to vote!</Link>
                }

            </div>
        </div>
    )
}


export default Card