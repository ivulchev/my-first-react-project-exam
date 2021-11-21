import styles from "./Login.module.css";
import {authServices} from "../../services/authService";
import { Redirect } from "react-router-dom";


function Login() {
    const onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        if (email.length > 0 && password.length > 0) {
            authServices.login(email, password);
                <Redirect to="/" />
        } else {
            window.alert("Empty Fields!")
        }
    }
    return (
        <form onSubmit={onSubmit} className={styles.loginForm}>
            <h1 id={styles.pageTitle}><mark>Login</mark></h1>
            <div className="form-group">
                <label for="exampleInputEmail1"><mark>Email address</mark></label>
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1"><mark>Password</mark></label>
                <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className={styles.loginBtn}>Submit</button>
        </form>
    )
}
export default Login