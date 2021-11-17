import  "./Navbar.module.css"
import { Link} from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/"><mark>F1 FanHome</mark></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/pilots"><strong><mark>Pilots</mark></strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/teams"><strong><mark>Teams</mark></strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/legends"><strong><mark>Legends</mark></strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/posts/my-posts"><strong><mark>My Posts</mark></strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/posts/create"><strong><mark>Create Post</mark></strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/posts/all"><strong><mark>All Posts</mark></strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/calendar"><strong><mark>Calendar</mark></strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"><strong><mark>Login</mark></strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout"><strong><mark>Logout</mark></strong></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register"><strong><mark>Register</mark></strong></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar