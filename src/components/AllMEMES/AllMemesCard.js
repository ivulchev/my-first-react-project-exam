import styles from "./AllMEMES.module.css"
import { Link } from "react-router-dom"
function allMemesCard({meme}){
    let upButton = <button className={styles.upBtn} >
        Up
    </button>
    let downButton = <button className={styles.downBtn} >
        Down
    </button>
    let buttons = [upButton, downButton]
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={meme.image} id={styles.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{meme.title}</h5>
                <p className="rating">Rating: {meme.rating} </p>
                {localStorage.email ?
                buttons :
                <Link to="/login" id={styles.loginLink}>  Please, login to vote!</Link>}
            </div>
        </div>
    )
}

export default allMemesCard