import styles from "./Card.module.css"
function Card({pilot}) {
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={pilot.logoUrl} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{pilot.name}</h5>
                <p className="card-text" id={styles.description} >{pilot.description}</p>
                <p className="rating">Rating: </p>
                <button href="/details"className={pilot._id} >
                    Details
                </button>
                <button className={styles.upBtn} >
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