function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="/"><mark>F1 Madness</mark></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/pilots"><strong><mark>Pilots</mark></strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/teams"><strong><mark>Teams</mark></strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/legends"><strong><mark>Legends</mark></strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/profile"><strong><mark>Profile</mark></strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/posts/create"><strong><mark>Create Post</mark></strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/posts/all"><strong><mark>All Posts</mark></strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/calendar"><strong><mark>Calendar</mark></strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login"><strong><mark>Login</mark></strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/logout"><strong><mark>Logout</mark></strong></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register"><strong><mark>Register</mark></strong></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar