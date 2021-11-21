import styles from "./LegendsCard.module.css"
function LegendsCard({legend}) {
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={legend.logoUrl} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{legend.name}</h5>
                <p className="card-text" id={styles.description} >{legend.description}</p>
                <p className="rating">Rating: {legend.rating} </p>
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
export default LegendsCard