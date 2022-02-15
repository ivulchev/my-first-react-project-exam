import "./Login.css";

import { useHistory } from "react-router";
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import {useNotificationContext, types} from "../../contexts/NotificationContext"
import { authServices } from "../../services/authService";
import ErrorPage from "../Error/ErrorPage";
import { auth } from "../../services/initializeFirebase";
import { Link } from "react-router-dom";


function Login() {
    const { user, login } = useContext(AuthContext);
    const { addNotification } = useNotificationContext();
    let history = useHistory()
    const onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        if (email.length > 0 && password.length > 0) {
            auth.signInWithEmailAndPassword(email, password)
                .then((data) => {
                    let info = data.user._delegate
                    authServices.saveData(info)
                    let user = authServices.getData()
                    if (user.email) {
                        login(user.email)
                        history.push("/")
                        
                    }

                })
                .catch((function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        addNotification('Wrong password.', types.error)
                      } else {
                         let warning = errorMessage.slice(9, -22)
                        addNotification(warning, types.warn)
                      }
                }))
        } else {
            addNotification("Empty Fields!", types.warn)
        }
    }
    return (user ? <ErrorPage /> :
        <form onSubmit={onSubmit} className="login-register--form">
            <h1>Log in</h1>
            <p>Enter your credentials to access your account.</p>
            <div className="form--login">
                <label htmlFor="input--email" >Email address</label>
                <input type="email" name="email" className="form-control" id="input--email" aria-describedby="emailHelp" placeholder="Enter your email" />
            </div>
            <div className="form--login">
                <label htmlFor="password--input">Password</label>
                <input type="password" name="password" className="form-control" id="password--input" placeholder="Enter your password" />
            </div>
            <button type="submit" className="submit--btn">Login</button>
            <p className="not--member"> Not a member? <Link to="/register" className="sign--up--link">Sign up</Link></p>
        </form>
    )
}
export default Login