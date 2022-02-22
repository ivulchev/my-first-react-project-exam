import { Link } from "react-router-dom";
import "./ErrorPage.css"
function ErrorPage() {
    return <section className="error">
            <Link to="/"><h1>Oops! Something's wrong go back to <strong>Home </strong>page!</h1></Link>
            </section>
}

export default ErrorPage


