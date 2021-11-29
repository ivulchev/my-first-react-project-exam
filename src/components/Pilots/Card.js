import styles from "./Card.module.css"
import * as requester from "../../services/requester";
import { useState } from "react";
import { Link } from "react-router-dom";
function Card({ pilot }) {
    const [rating, setRating] = useState(pilot.rating);
        function voteUp(e) {
          e.preventDefault();
          requester.put(`http://localhost:3030/jsonstore/drivers/${pilot._id}`, {pilot:pilot.name, team:pilot.team, logoUrl:pilot.logoUrl, number:pilot.number, description:pilot.description, rating:Number(pilot.rating) + 1, _id:pilot._id})
            setRating(Number(pilot.rating) + 1)
        }  
        function voteDown(e) {
            e.preventDefault();
            requester.put(`http://localhost:3030/jsonstore/drivers/${pilot._id}`, {pilot:pilot.name, team:pilot.team, logoUrl:pilot.logoUrl, number:pilot.number, description:pilot.description, rating:Number(pilot.rating) - 1, _id:pilot._id})
            setRating(Number(pilot.rating) - 1)
        }
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={pilot.logoUrl} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{pilot.name}</h5>
                <p className="card-title">Team: {pilot.team} </p>
                <p className="card-text" id={styles.description} >{pilot.description}</p>
                <p className="rating">Rating: {rating} </p>
                <button className={styles.detailsBtn} ><Link to={`/pilots/${pilot._id}`} >
                    Details
                </Link></button>
                <button className={styles.upBtn} onClick={voteUp}>
                    Up
                </button>
                <button className={styles.downBtn} onClick={voteDown}>
                    Down
                </button>
            </div>
        </div>
    )
}


export default Card