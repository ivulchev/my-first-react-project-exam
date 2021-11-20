import styles from "./EditMeme.module.css"
function EditMeme() {
    return (
        <form  id={styles.editMeme}>
            <h1 id={styles.pageTitle}><mark>Edit MEME</mark></h1>
            <div className="form-group">
                <label for="titleMEME"><mark>Title</mark></label>
                <input type="email" className="form-control" id="titleMEME" aria-describedby="emailHelp" placeholder="Title"/>
            </div>
            <div className="form-group">
                <label for="imageMEME"><mark>Image URL</mark></label>
                <input type="text" className="form-control" id="imageMEME" placeholder="Image "/>
            </div>
            <button type="submit" className={styles.editBtn}>Edit</button>
        </form>
    )
}

export default EditMeme