import styles from "./Card.module.css"
import * as requester from "../../services/requester"
function Card({ pilot }) {
        function handleClick(e) {
          e.preventDefault();
          return requester.put(`http://localhost:3030/data/pilots/${pilot._id}`, {rating: +1});
        }  
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={pilot.logoUrl} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{pilot.name}</h5>
                <p className="card-text" id={styles.description} >{pilot.description}</p>
                <p className="rating">Rating: {pilot.rating} </p>
                <button href="/details" className={styles.detailsBtn} >
                    Details
                </button>
                <button className={styles.upBtn} onClick={handleClick}>
                    Up
                </button>
                <button className={styles.downBtn} >
                    Down
                </button>
            </div>
        </div>
    )
}


export default Card