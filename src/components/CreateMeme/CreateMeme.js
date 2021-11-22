import styles from "./CreateMeme.module.css"
function CreateMeme() {
    return (
        <form  id={styles.createMeme}>
            <h1 id={styles.pageTitle}>Create MEME</h1>
            <div className="form-group">
                <label for="titleMEME" id={styles.pageTitle}>Title</label>
                <input type="email" className="form-control" id="titleMEME" aria-describedby="emailHelp" placeholder="Add Title"/>
            </div>
            <div className="form-group">
                <label for="imageMEME" id={styles.pageTitle}>Image URL</label>
                <input type="text" className="form-control" id="imageMEME" placeholder="Add image URL "/>
            </div>
            <button type="submit" id={styles.createBtn}>Submit</button>
        </form>
    )
}

export default CreateMeme
