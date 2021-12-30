import styles from "./AllMEMES.module.css"
import { Link } from "react-router-dom";
import * as requester from "../../services/requester";
import { useState, useEffect, useContext } from "react";
import { endpoints } from "../../services/services";
import { AuthContext } from "../../contexts/AuthContext"
function AllMemesCard({ meme }) {
    const [id, setId] = useState(meme[0]);
    const [memeInfo, setMemeInfo] = useState(meme[1])
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(meme[1].rating);
    function voteUp(e) {
        e.preventDefault();
        requester.patch(`${endpoints.baseUrl}memes/${id}.json`, { rating: rating + 1, voters: [...memeInfo.voters, user] })
        .then(() => {
            setRating(rating + 1);
        })
    }
    function voteDown(e) {
        e.preventDefault();
        requester.patch(`${endpoints.baseUrl}memes/${id}.json`, { rating: rating - 1, voters: [...memeInfo.voters, user] })
        .then(() => {
            setRating(rating - 1);
        })
    }
    const [isOwner, setIsOwner] = useState()
    const [isVoted, setIsVoted] = useState()
    useEffect(() => {
        fetch(`${endpoints.baseUrl}memes/${id}.json`)
            .then((res) => res.json())
            .then((data) => {
                if ((data.voters).includes(user)) {
                    setIsVoted(true)
                } else {
                    setIsVoted(false)
                }
                if ((data._ownerId === localStorage._id)) {
                    setIsOwner(true)
                }
            })
    }, [rating])


    let upButton = <button className={styles.upBtn} onClick={voteUp}>
        Up
    </button>
    let downButton = <button className={styles.downBtn} onClick={voteDown}>
        Down
    </button>
    let buttons = [upButton, downButton]

    let Voted = () => {
        if (isOwner) {
            return <p id={styles.loginLink}> <strong>You can't vote on you own posts!</strong></p>
        } else {
            if (isVoted) {
                return <p id={styles.loginLink}> <strong>Thank you for voting!</strong></p>
            } else {
                return buttons
            }
        }

    }
    return (
        <div className="card" id={styles.cardPartial}>
            <img src={memeInfo.image} id={styles.img} alt="Card img cap" />
            <div className="card-body">
                <h5 className="card-title">{memeInfo.title}</h5>
                <p className="rating">Rating: {rating} </p>
                {user ?
                    <Voted /> :
                    <Link to="/login" id={styles.loginLink}>  Please, login to vote!</Link>}
            </div>
        </div>
    )
}

export default AllMemesCard