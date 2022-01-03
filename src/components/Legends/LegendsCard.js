import styles from "./LegendsCard.module.css"
import { Link } from "react-router-dom";
import * as requester from "../../services/requester";
import { useState } from "react";
import { useEffect } from "react";
import { endpoints } from "../../services/services";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function LegendsCard({legend}) {
    const [rating, setRating] = useState(legend.rating);
    const { user } = useContext(AuthContext);
    function voteUp(e) {
        e.preventDefault();
        if (window.confirm("Do you really want to vote? You can vote only once per Legend!")){
        requester.patch(`${endpoints.baseUrl}legends/${legend._id}.json`, { rating: rating + 1, voters: [...legend.voters, user]})
        .then(() => {
            setRating(rating + 1);
        })
        }
    }
    function voteDown(e) {
        e.preventDefault();
        if (window.confirm("Do you really want to vote? You can vote only once per Legend!")){
        requester.patch(`${endpoints.baseUrl}legends/${legend._id}.json`, { rating: rating - 1, voters: [...legend.voters, user]})
        .then(() => {
            setRating(rating - 1);
        })
        }
    }
    const [isVoted, setIsVoted] = useState()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}legends/${legend._id}.json`)
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
            <img src={legend.image} id={styles.img} alt="Card img cap" />
                <h5 className="card-title">{legend.name}</h5>
                <p className="card-text" id={styles.teams}><strong>Teams:</strong> {legend.teams}</p>
                <p className="card-text" id={styles.teams}><strong>Championships:</strong> {legend.championships}</p>
                <p className="rating">Rating: {rating} </p>
                <button className={styles.detailsBtn} > <Link to={`/legends/${legend._id}`} id={styles.details} >
                    Details
                    </Link>
                </button>
                {user ?
                <Voted key={legend._id}/> :
                <Link to="/login" id={styles.loginLink}>  Please, login to vote!</Link>}
            </div>
        </div>
    )
}
export default LegendsCard