import styles from "./MyMEMES.module.css"
function MyMEMES(props) {
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={props.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="rating">Rating: </p>
                <button className={styles.upBtn} >
                    Edit
                </button>
                <button className={styles.downBtn} >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default MyMEMES