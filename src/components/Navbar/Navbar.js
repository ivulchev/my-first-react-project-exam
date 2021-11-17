import  "./Navbar.css"
import { NavLink} from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <NavLink className="navbar-brand" activeClassName="active" to="/"><mark>F1 FanHome</mark></NavLink>
            <button className="navbar-toggler" type="button" data-toggle ="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/pilots"><strong><mark>Pilots</mark></strong></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/teams"><strong><mark>Teams</mark></strong></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/legends"><strong><mark>Legends</mark></strong></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/posts/my-posts"><strong><mark>My Posts</mark></strong></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/posts/create"><strong><mark>Create Post</mark></strong></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/posts/all"><strong><mark>All Posts</mark></strong></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/calendar"><strong><mark>Calendar</mark></strong></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/login"><strong><mark>Login</mark></strong></NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink className="nav-link" activeClassName="active" to="/logout"><strong><mark>Logout</mark></strong></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/register"><strong><mark>Register</mark></strong></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar