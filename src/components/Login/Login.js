import styles from "./Login.module.css";
import {authServices} from "../../services/authService";
import { useHistory } from "react-router";
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';



function Login() {
    const { login } = useContext(AuthContext);
    let history = useHistory()
    const onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        if (email.length > 0 && password.length > 0) {
            authServices.login(email, password)
            .then(() => {
                login(email)
            })
            history.push("/")
            
        } else {
            window.alert("Empty Fields!")
        }
    }
    return (
        <form onSubmit={onSubmit} className={styles.loginForm}>
            <h1 id={styles.pageTitle}>Login</h1>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" id={styles.pageTitle}>Email address</label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1" id={styles.pageTitle}>Password</label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className={styles.loginBtn}>Submit</button>
        </form>
    )
}
export default Login