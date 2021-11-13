import styles from "./CreateMeme.module.css"
function CreateMeme() {
    return (
        <div id = {styles.createMeme}>
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
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
    )
}

export default CreateMeme
