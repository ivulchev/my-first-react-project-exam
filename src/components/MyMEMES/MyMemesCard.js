import styles from "./MyMEMES.module.css";
function MyMemesCard({meme}){
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={meme.image} id={styles.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{meme.title}</h5>
                <p className="rating">Rating: {meme.rating} </p>
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

export default MyMemesCard