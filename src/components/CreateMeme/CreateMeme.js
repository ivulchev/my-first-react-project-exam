import styles from "./CreateMeme.module.css"
function CreateMeme() {
    return (
        <form className={styles.loginForm} id={styles.createMeme}>
            <h1 id={styles.pageTitle}><mark>Create MEME</mark></h1>
            <div className="form-group">
                <label for="titleMEME"><mark>Title</mark></label>
                <input type="email" className="form-control" id="titleMEME" aria-describedby="emailHelp" placeholder="Add Title"/>
            </div>
            <div className="form-group">
                <label for="imageMEME"><mark>Image URL</mark></label>
                <input type="text" className="form-control" id="imageMEME" placeholder="Add image URL "/>
            </div>
            <button type="submit" className={styles.loginBtn}>Submit</button>
        </form>
    )
}

export default CreateMeme
