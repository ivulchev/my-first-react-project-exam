import { useHistory } from "react-router";
import { authServices } from "../../services/authService";
import styles from "./Register.module.css";
import ErrorPage from "../Error/ErrorPage";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
function Register() {
    let history = useHistory()
    const {user} = useContext(AuthContext);
    function onSubmit(e){
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        let email = formData.get("email");
        let password = formData.get("password");
        let rePassword = formData.get("rePassword");
        if(email.length > 0 && password.length > 0 && rePassword.length > 0){
            if(password === rePassword){
                authServices.register(email, password)
                history.push("/login")
            }else{
                window.alert("Password and Repeat Password doesn't match!")
            }
        }else{
            window.alert("Empty Fields!")
        }
    }
    return (user ? <ErrorPage/> :
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