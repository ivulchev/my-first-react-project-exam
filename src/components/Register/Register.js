import { useHistory } from "react-router";
import { authServices } from "../../services/authService";
import styles from "./Register.module.css";
import ErrorPage from "../Error/ErrorPage";
import { auth } from "../../services/initializeFirebase";
function Register() {
    let history = useHistory()
    function onSubmit(e){
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        let email = formData.get("email");
        let password = formData.get("password");
        let rePassword = formData.get("rePassword");
        if(email.length > 5 && password.length > 5 && rePassword.length > 5){
            if(password === rePassword){
                auth.createUserWithEmailAndPassword(email, password)
                window.alert("Your registration was succesfull! You can log in now.")
                history.push("/login")
            }else{
                window.alert("Password and Repeat Password doesn't match!")
            }
        }else{
            window.alert("You must enter minimum 6 symbols!")
        }
    }
    return (localStorage.email ? <ErrorPage/> :
        <form onSubmit={onSubmit} className={styles.registerForm}>
            <div className="form-group">
                <h1>Register</h1>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email"/>
                <small id="emailHelp" className ="form-text">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Repeat Password</label>
                <input type="password" className="form-control" id="rePassword" name="rePassword" placeholder="Password"/>
            </div>
            <button type="submit" className={styles.registerBtn}>Submit</button>
        </form>
    )
}
export default Register