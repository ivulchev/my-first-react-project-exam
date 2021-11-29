import styles from "./TeamCard.module.css";
import { Link } from "react-router-dom";

function TeamCard({ team }) {

    let upButton = <button className={styles.upBtn} >
        Up
    </button>
    let downButton = <button className={styles.downBtn} >
        Down
    </button>
    let buttons = [upButton, downButton]
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={team.image} id={styles.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <p className="card-text" id={styles.text} ><strong>Drivers:</strong> {team.drivers}</p>
                <p className="card-text" id={styles.text} ><strong>Constructor Championships:</strong> {team.championships}</p>
                <p className="rating">Rating: {team.rating} </p>
                <button className={styles.detailsBtn} > <Link to={`/teams/${team._id}`} id={styles.loginLink} >
                    Details
                    </Link>
                </button>
                {localStorage.email ?
                buttons :
                <Link to="/login" id={styles.loginLink}>  Please, login to vote!</Link>}
            </div>
        </div>
    )
}
export default TeamCard