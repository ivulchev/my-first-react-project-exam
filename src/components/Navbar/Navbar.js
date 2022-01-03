import "./Navbar.css"
import { NavLink, Link } from "react-router-dom";

import { useHistory } from 'react-router';
import { useContext } from 'react';

import { authServices } from "../../services/authService";
import { AuthContext } from '../../contexts/AuthContext';
import { useState } from "react";

function Navbar() {
    const [location, setLocation] = useState("home")
    const { user, logout } = useContext(AuthContext);
    let username = [];
    if(user){
        username = user.split("@");
    }
    let history = useHistory();
    function onLogout() {
        if (window.confirm("Do you really want to logout?")) {
            authServices.logout()
                .then(() => {
                    logout()
                    history.push("/login")
                })
        }

    }

    return (
        <nav id={`navbar-${location}`} className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" activeClassName="active" to="/" onClick={() => setLocation("home")}>F1 FanHome</NavLink>
            <div className="collapse navbar" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/pilots" onClick={() => setLocation("drivers")}>Drivers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/teams" onClick={() => setLocation("teams")}>Teams</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/legends" onClick={() => setLocation("legends")}>Legends</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/posts/all" onClick={() => setLocation("allMemes")}>All Posts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/calendar" onClick={() => setLocation("calendar")}>Calendar</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/standings" onClick={() => setLocation("liveStandings")}>Standings</NavLink>
                    </li>
                    {user ?
                        (<ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/posts/my-posts" onClick={() => setLocation("myMemes")}>My Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/posts/create" onClick={() => setLocation("createMeme")}>Create Post</NavLink>
                            </li>

                            <li className="nav-item" >
                                <Link className="nav-link" to="" onClick={onLogout}>Logout</Link>
                            </li>
                        </ul>) :
                        (<ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/login" onClick={() => setLocation("login")} >Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/register" onClick={() => setLocation("register")}>Register</NavLink>
                            </li>
                        </ul>)}
                    <li className="nav-item">
                        <p className="nav-link" id="greeting" >Welcome, {user ? username[0] : "guest"}!</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar