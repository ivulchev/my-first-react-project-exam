import styles from "./Error.module.css"
function Error(){
    alert("404 Page not found!")
    return(
        <div>
        <img src="https://wallpaperaccess.com/full/6725718.jpg" className={styles.imgFluid} alt="..."></img>
        </div>
    )

}


export default Error