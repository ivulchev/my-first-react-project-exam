import styles from "./TeamCard.module.css";
import { Link} from "react-router-dom";
import * as requester from "../../services/requester";
import { useState, } from "react";
import { useEffect } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { endpoints } from "../../services/services";


function TeamCard({ team }) {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(team.rating);
    function voteUp(e) {
        e.preventDefault();
        if(window.confirm("Do you really want to vote? You can vote only once per Team!")){
        requester.patch(`${endpoints.baseUrl}teams/${team._id}.json`, { rating: rating + 1, voters: [...team.voters, user]})
        .then(() => {
            setRating(rating + 1);
        })
        
        
        }
    }
    function voteDown(e) {
        e.preventDefault();
        if(window.confirm("Do you really want to vote? You can vote only once per Team!")){
        requester.patch(`${endpoints.baseUrl}teams/${team._id}.json`, { rating: rating - 1, voters: [...team.voters, user]})
        .then(() => {
        setRating(rating - 1);
        })
        }
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
            <img src={team.image} id={styles.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <p className="card-text" id={styles.text} ><strong>Drivers:</strong> {team.drivers}</p>
                <p className="card-text" id={styles.text} ><strong>Constructor Championships:</strong> {team.championships}</p>
                <p className="rating">Rating: {rating} </p>
                <button className={styles.detailsBtn} > <Link to={`/teams/${team._id}`} id={styles.loginLink} >
                    Details
                    </Link>
                </button>
                {user ?
                <Voted key={team._id}/> :
                <Link to="/login" id={styles.loginLink}>  Please, login to vote!</Link>}
            </div>
        </div>
    )
}
export default TeamCard