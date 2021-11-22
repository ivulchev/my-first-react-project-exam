import styles from "./Register.module.css"
function Register() {
    return (
        <form className={styles.registerForm}>
            <div className="form-group">
                <h1>Register</h1>
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className ="form-text">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Repeat Password</label>
                <input type="password" className="form-control" id="rePassword" placeholder="Password"/>
            </div>
            <button type="submit" className={styles.registerBtn}>Submit</button>
        </form>
    )
}
export default Register