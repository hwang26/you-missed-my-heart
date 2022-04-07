
import styles from './Form.module.scss';

const Form = (props) => {
    // We should perform some clientside validation to make sure the image is the correct type
    // We can also style the button a bit better
    return(
        <form className={styles.formStyle} method="post" encType="multipart/form-data">
            <label for="imageInput">Upload Image</label>
            <input id="imageInput" type="file" accept="image/*" />
            <button>Submit</button>
        </form>
    );

};

export default Form;