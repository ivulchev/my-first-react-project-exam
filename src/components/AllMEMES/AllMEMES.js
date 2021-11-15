import styles from "./AllMEMES.module.css"
function AllMEMES(props) {
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={props.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="rating">Rating: </p>
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

export default AllMEMES