import styles from "./Login.module.css"
function Login() {
    return (
        <form className={styles.loginForm}>
            <div className="form-group">
                <label for="exampleInputEmail1"><mark>Email address</mark></label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className ="form-text"><mark>We'll never share your email with anyone else.</mark></small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1"><mark>Password</mark></label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" className={styles.loginBtn}>Submit</button>
        </form>
    )
}
export default Login