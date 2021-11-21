import styles from "./ErrorPage.module.css"
function ErrorPage(){
    return(
        <div>
        <div>
        <img src="https://wallpaperaccess.com/full/6725718.jpg" className={styles.imgFluid} alt="..."></img>
        </div>
        {alert("Page is not found!")}
        </div>
    )
}

export default ErrorPage