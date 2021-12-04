import "./Navbar.css"
import { NavLink, Link } from "react-router-dom";
import { authServices } from "../../services/authService";
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar( ) {
    const { user, logout } = useContext(AuthContext);
    let history = useHistory();
    function onLogout() {
        authServices.logout()
        .then(()=>{
            logout()
            history.push("/")
        })
      }
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" activeClassName="active" to="/">F1 FanHome</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/pilots">Drivers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/teams">Teams</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/legends">Legends</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/posts/all">All Posts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/calendar">Calendar</NavLink>
                    </li>
                    {localStorage.email ?
                        (<ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/posts/my-posts">My Posts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/posts/create">Create Post</NavLink>
                            </li>

                            <li className="nav-item" >
                                <Link className="nav-link" to="/login" onClick={onLogout}>Logout</Link>
                            </li>
                        </ul>) :
                        (<ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/login" >Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
                            </li>
                        </ul>)}
                    <li className="nav-item">
                        <p className="nav-link" id="greeting" >Welcome, {user ? user : "guest"}!</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar