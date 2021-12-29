import styles from "./Card.module.css"
import * as requester from "../../services/requester";
import { useState } from "react";
import { Link} from "react-router-dom";
import { useEffect, } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';


function Card({ driver }) {
    const [rating, setRating] = useState(driver.rating);
    const { user } = useContext(AuthContext);

    function voteUp(e) {
        e.preventDefault();
        if (window.confirm("Do you really want to vote? You can vote only once per Driver!")) {
            requester.patch(`https://f1-fanhome-default-rtdb.europe-west1.firebasedatabase.app/drivers/${driver._id}.json`, { rating: rating + 1, voters: [...driver.voters, localStorage.email]});  
            setRating(rating + 1);
            setIsVoted(true)
        }
    }
    function voteDown(e) {
        e.preventDefault();
        if (window.confirm("Do you really want to vote? You can vote only once per Driver!")) {
            requester.patch(`https://f1-fanhome-default-rtdb.europe-west1.firebasedatabase.app/drivers/${driver._id}.json`, { rating: rating - 1, voters: [...driver.voters, localStorage.email] });
            setRating(rating - 1);
            setIsVoted(true)
        }
    }
    const [isVoted, setIsVoted] = useState(Boolean)
    useEffect(() => {
        fetch(`https://f1-fanhome-default-rtdb.europe-west1.firebasedatabase.app/drivers/${driver._id}.json`)
            .then((res) => res.json())
            .then((data) => {
                let array = data.voters
                if (array.includes(user)) {
                    setIsVoted(true)
                } else {
                    setIsVoted(false)
                }
            })
    }, [isVoted])
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
            <img src={driver.logoUrl} alt="Card img cap" id={styles.image} />
            <div className="card-body">
                <h5 className="card-title">{driver.name}</h5>
                <p className="card-title">Team: {driver.team} </p>
                <p className="card-text" id={styles.description} >{driver.description}</p>
                <p className="rating">Rating: {rating} </p>
                <button className={styles.detailsBtn} ><Link to={`pilots/${driver._id}`} id={styles.loginLink} >
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