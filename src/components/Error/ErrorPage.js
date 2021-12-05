import { Link } from "react-router-dom"
import styles from "./ErrorPage.module.css"
function ErrorPage() {
    return (
        <div className="card" id={styles.card}>
            <img src="https://wallpaperaccess.com/full/6725718.jpg" class="card-img-top" alt="..."/>
            <div className ="card-body">
            <Link to="/"><p className ="card-text" id={styles.text}>Oops! Something's wrong go back to home page!</p></Link>
            </div>
        </div>
    )
}

export default ErrorPage


