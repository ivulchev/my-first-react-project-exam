import styles from "./CreateMeme.module.css"
function CreateMeme() {
    return (
        <div id = {styles.createMeme}>
            <h1 id={styles.pageTitle}><mark>Creating Meme</mark></h1>
            <h1 id={styles.pageTitle}><mark>Creating Meme</mark></h1>
            <div className="labels">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><mark>Title</mark></label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><mark>Description</mark></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"><mark>Image URL</mark></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>
            </div>
        </div>
    )
}

export default CreateMeme
