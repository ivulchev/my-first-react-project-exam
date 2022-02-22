import "./Footer.css";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <footer className="footer">
           <p>All Rights Reserved &copy;   <a href="https://github.com/ivulchev"><i class="fab fa-github-square"></i> GitHub Profile </a>     <a href="https://www.linkedin.com/in/ivan-valchev-451922230"><i class="fab fa-linkedin"></i> LinkedIn Profile </a> <text> <i class="fas fa-envelope"></i> ivulchev1@gmail.com</text> <text><i class="fas fa-phone-square-alt"></i> +359892066372</text> <Link to="/about"><i class="fa-solid fa-circle-info"></i> About Website and Me</Link> <a href="#">Back to Top <i class="fa-solid fa-circle-up"></i></a> </p> 
        </footer>
    )
}
export default Footer