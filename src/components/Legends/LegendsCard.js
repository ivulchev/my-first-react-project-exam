import styles from "./LegendsCard.module.css"
import { Link } from "react-router-dom";
import * as requester from "../../services/requester";
import { useState } from "react";
import { useEffect } from "react";
import { endpoints } from "../../services/services";

function LegendsCard({legend}) {
    const [rating, setRating] = useState(legend.rating);
    function voteUp(e) {
        e.preventDefault();
        if (window.confirm("Do you really want to vote? You can vote only once per Legend!")){
        requester.put(`${endpoints.baseUrl}jsonstore/legends/${legend._id}`, { rating: rating + 1, voters: [...legend.voters, localStorage._id]})
        return setRating(rating + 1);
        }
    }
    function voteDown(e) {
        e.preventDefault();
        if (window.confirm("Do you really want to vote? You can vote only once per Legend!")){
        requester.put(`${endpoints.baseUrl}jsonstore/legends/${legend._id}`, { rating: rating - 1, voters: [...legend.voters, localStorage._id]})
        return setRating(rating - 1);
        }
    }
    const [isVoted, setIsVoted] = useState()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}jsonstore/legends/${legend._id}`)
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
            <img src={legend.image} id={styles.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{legend.name}</h5>
                <p className="card-text" id={styles.teams}><strong>Teams:</strong> {legend.teams}</p>
                <p className="card-text" id={styles.teams}><strong>Championships:</strong> {legend.championships}</p>
                <p className="rating">Rating: {rating} </p>
                <button className={styles.detailsBtn} > <Link to={`/legends/${legend._id}`} id={styles.loginLink} >
                    Details
                    </Link>
                </button>
                {localStorage._id ?
                <Voted key={legend._id}/> :
                <Link to="/login" id={styles.loginLink}>  Please, login to vote!</Link>}
            </div>
        </div>
    )
}
export default LegendsCard