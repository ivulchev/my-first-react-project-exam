import "./Navbar.css"
import { NavLink, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"

import { useHistory } from 'react-router';
import { useContext } from 'react';

import { authServices } from "../../services/authService";
import { AuthContext } from '../../contexts/AuthContext';
import { useState } from "react";

function Navbar() {
    const { user, logout } = useContext(AuthContext);

    const[toggle, setToggle] = useState("hide")
    let username = [];
    if (user) {
        username = user.split("@");
    }
    let history = useHistory();
    function onLogout() {
        authServices.logout()
            .then(() => {
                logout()
                handleClose()
                history.push("/login")
            })

    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <header className="nav-header">
        
        <nav className="navigation">
        <NavLink className="nav-brand" activeClassName="active" to="/" >F1 FanHome</NavLink>
            <ul className={`navbar-list  ${toggle}`}>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/drivers" >Drivers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/teams" >Teams</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/top-voted" >Top Voted</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/posts/all" >All Posts</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/calendar" >Calendar</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/standings" >Standings</NavLink>
                </li>
                {user ?
                    (<ul className="logged-in">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/posts/my-posts" >My Posts</NavLink>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" onClick={handleShow} id="logout-tag">Logout</a>
                        </li>
                    </ul>
                    ) :
                    (
                        <div className="logged-out">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
                            </li>

                        </div>
                    )}
                <li className="nav-item">
                    <p className="greeting" >Welcome, {user ? username[0] : "guest"}!</p>
                </li>
                
            </ul>
            <button className="toggle-btn" onClick={() => toggle === "show" ? setToggle("hide") : setToggle("show")}><i class="fa-solid fa-bars"></i></button>
            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are going to logout from your account! Please confirm.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onLogout}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </nav>
    </header>
}

export default Navbar