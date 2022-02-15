import { useHistory } from "react-router";
import "./Register.css";
import ErrorPage from "../Error/ErrorPage";
import { auth } from "../../services/initializeFirebase";
import {useNotificationContext, types} from "../../contexts/NotificationContext"
function Register() {
    let history = useHistory()
    const { addNotification } = useNotificationContext();
    function onSubmit(e){
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        let email = formData.get("email");
        let password = formData.get("password");
        let rePassword = formData.get("rePassword");
        if(email.length > 5 && password.length > 5 && rePassword.length > 5){
            if(password === rePassword){
                auth.createUserWithEmailAndPassword(email, password)
                addNotification("Your registration was succesfull! You can log in now.", types.succes)
                history.push("/login")
            }else{
                addNotification("Password and Repeat Password doesn't match!", types.warn)
            }
        }else{
            addNotification("You must enter minimum 6 symbols!", types.warn)
        }
    }
    return (localStorage.email ? <ErrorPage/> :
        <form onSubmit={onSubmit} className="login-register--form">
            <div className="form-group">
                <h1>Create new Account</h1>
                <label htmlFor="register--input">Email address</label>
                <input type="email" className="form-control" id="register--input" aria-describedby="emailHelp" name="email" placeholder="Enter your email"/>
                <p  className ="email-info">We'll never share your email with anyone else.</p>
            </div>
            <div className="form-group">
                <label htmlFor="password--input">Password</label>
                <input type="password" className="form-control" id="password--input" name="password" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label htmlFor="repeatPass--input">Repeat Password</label>
                <input type="password" className="form-control" id="repeatPass--input" name="rePassword" placeholder="Repeat Password"/>
            </div>
            <button type="submit" className="submit--btn">Submit</button>
        </form>
    )
}
export default Register