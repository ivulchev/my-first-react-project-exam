import styles from "./TeamDetails.module.css"
function TeamDetails(props) {
    return (
        <div className="card" id={styles.details} >
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className ="card-body">
            <h5 className ="card-title">{props.name}</h5>
            <p className ="card-text">{props.description}</p>
            </div>
            
            <div className ="card-body">
            <a href="/pilots" className ="card-link">Go Back</a>
            </div>
        </div>
    )
}
export default TeamDetails