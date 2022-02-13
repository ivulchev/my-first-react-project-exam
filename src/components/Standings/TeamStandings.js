import "./TeamsStandings.css";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { endpoints } from "../../services/services";

function TeamsStandings() {
    const [first, setFirst] = useState([]);
    const [sec, setSec] = useState([]);
    const [third, setThird] = useState([]);
    const [teams, setTeams] = useState([]);
    const [expand, setExpand] =useState("minimize")
    useEffect(() => {
        fetch(`${endpoints.baseUrl}teams.json`)
            .then(res => res.json())
            .then(result => {
                let array = Object.values(result)
                array.sort((a, b) => {
                    return b.rating - a.rating || a.name.localeCompare(b.name)
                })
                setFirst(array[0]);
                setSec(array[1]);
                setThird(array[2]);
                setTeams(array)

            });
    }, []);

    function showHide(){
        if(expand === "minimize"){
            setExpand("maximize")
        }else{
            setExpand("minimize")
        }
    }
    return (
        <section className={`teams--standings ${expand}`}>
        <h2>Top Voted Teams</h2>
        <ul >
            <li>
                <article className={`first--team ${first.logocolor}`}>
                    <img className="car" src={`cars/${first.logocolor}.png`}/>
                    <img className="team--logo" src={`logos/${first.logocolor}.png`}/>
                    <div class="team--name">
                        <p class="name">{first.name}</p>
                    </div>
                    <div className="place--points">
                        <p className="place"> 1st</p>
                        <p className="points"> {first.rating} votes</p>
                    </div>
                </article>
            </li>
            <li >
                <article class={`second--team ${sec.logocolor}`}>
                    <img class="car" src={`cars/${sec.logocolor}.png`}/>
                    <img class="team--logo" src={`logos/${sec.logocolor}.png`}/>
                    <div class="team--name">
                        <p class="name">{sec.name}</p>
                    </div>
                    <div class="place--points">
                        <p class="place">2nd </p>
                        <p class="points">  {sec.rating} votes</p>
                    </div>
                </article>
            </li>
            <li >
                <article class={`third--team ${third.logocolor}`}>
                    <img class="car" src={`cars/${third.logocolor}.png`}/>
                    <img class="team--logo" src={`logos/${third.logocolor}.png`}/>
                    <div class="team--name">
                        <p class="name">{third.name}</p>
                    </div>
                    <div class="place--points">
                        <p class="place">3rd</p>
                        <p class="points">  {third.rating} votes</p>
                    </div>
                </article>
            </li>
            <button className="expand-btn" onClick={()=>showHide()}>{expand === "minimize" ? <i class="fa-solid fa-arrow-down-wide-short"> <text>  Show Drivers</text></i>  : <i class="fa-solid fa-arrow-up-wide-short"><text>  Hide Drivers</text></i> }</button>
            {teams.map((x)=> teams.indexOf(x) >= 3 ?<li>
                <article className={`others ${x.logocolor}`}>
                <p className="place">{teams.indexOf(x) + 1}th: </p>
                <p class="name">{x.name}</p>
                <p class="points">Votes: {x.rating}</p>
                <img class="team--logo" src={`logos/${x.logocolor}.png`}/>
            </article>
            </li> : null)}
        </ul>
        </section>
    )
}

export default TeamsStandings