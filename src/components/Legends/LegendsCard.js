import styles from "./LegendsCard.module.css"
import { Link } from "react-router-dom"
function LegendsCard({legend}) {
    let upButton = <button className={styles.upBtn} >
        Up
    </button>
    let downButton = <button className={styles.downBtn} >
        Down
    </button>
    let buttons = [upButton, downButton]
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={legend.image} id={styles.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{legend.name}</h5>
                <p className="card-text" id={styles.teams}><strong>Teams:</strong> {legend.teams}</p>
                <p className="rating">Rating: {legend.rating} </p>
                <button className={styles.detailsBtn} > <Link to={`/legends/${legend._id}`}  >
                    Details
                    </Link>
                </button>
                {localStorage.email ?
                buttons :
                <Link to="/login">  Please, login to vote!</Link>}
            </div>
        </div>
    )
}
export default LegendsCard