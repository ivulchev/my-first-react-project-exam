import styles from "./Card.module.css"
function Card(props) {
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={props.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text" id={styles.description} >{props.description}</p>
                <p className="rating">Rating: </p>
                <button href="/details"className={styles.detailsBtn} >
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