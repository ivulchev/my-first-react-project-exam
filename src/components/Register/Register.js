import styles from "./Register.module.css"
function Register() {
    return (
        <form className={styles.registerForm}>
            <div className="form-group">
                <label for="exampleInputEmail1"><mark>Email address</mark></label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className ="form-text"><mark>We'll never share your email with anyone else.</mark></small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1"><mark>Password</mark></label>
                <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1"><mark>Repeat Password</mark></label>
                <input type="password" className="form-control" id="rePassword" placeholder="Password"/>
            </div>
            <button type="submit" className={styles.registerBtn}>Submit</button>
        </form>
    )
}
export default Register