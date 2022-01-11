import styles from "./Login.module.css";

import { useHistory } from "react-router";
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import {useNotificationContext, types} from "../../contexts/NotificationContext"
import { authServices } from "../../services/authService";
import ErrorPage from "../Error/ErrorPage";
import { auth } from "../../services/initializeFirebase";


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
        <form onSubmit={onSubmit} className={styles.loginForm}>
            <h1 id={styles.pageTitle}>Login</h1>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" id={styles.pageTitle}>Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1" id={styles.pageTitle}>Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className={styles.loginBtn}>Submit</button>
        </form>
    )
}
export default Login