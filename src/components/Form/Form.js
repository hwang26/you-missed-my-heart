
import styles from './Form.module.scss';
import {useState} from 'react';

const Form = (props) => {
    
   const [file, setFile] = useState(null);

    // https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
    const fileTypes = [
        "image/apng",
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/svg+xml",
        "image/tiff",
        "image/webp",
        "image/x-icon"
    ];


    // Used in JSX as a visual
    let fileName="";

    if(file !== null){
        fileName = file.name;
    };

    // If the file is a valid image, return true
    function validFileType(unknownFile) {
        if(unknownFile !==(null || undefined)){
            return fileTypes.includes(unknownFile.type);
        }
        return false;
    }

    // Checks if the file is a valid image; if valid, sets the file
   function changeHandler(e){
        let uploadedFile = e.target.files[0];
        let isValid = validFileType(uploadedFile);

        if(isValid){
            setFile(uploadedFile);
        }
   }

    return(
        <form className={styles.formStyle} method="post" encType="multipart/form-data">
            {/*Label is for the image input element*/}
            <label htmlFor="imageInput">Upload Image</label>
            {
                fileName !== "" ?
                (<p>{fileName}</p>) :
                null
            }
            <input id="imageInput" type="file" accept="image/*" onChange={changeHandler}/>
            <button>Submit</button>
        </form>
    );

};

export default Form;