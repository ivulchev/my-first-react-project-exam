import styles from "./TeamCard.module.css";
import * as requester from "../../services/requester"

function TeamCard({team}) {
    function handleClick(e) {
        e.preventDefault();
        return requester.put(`http://localhost:3030//data/teams/${team._id}`, {rating: +1});
      } 
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={team.logoUrl} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <p className="card-text" id={styles.description} >{team.description}</p>
                <p className="rating">Rating: {team.rating} </p>
                <button href="/details"className={styles.detailsBtn} >
                    Details
                </button>
                <button className={styles.upBtn} onClick={handleClick} >
                    Up
                </button>
                <button className={styles.downBtn} >
                    Down
                </button>
            </div>
        </div>
    )
}
export default TeamCard