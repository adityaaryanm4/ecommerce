import "./new.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import { publicRequest, userRequest } from '../../requestMethod'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "../../firebase";

const New = ({ inputs, title, id }) => {

    const [file, setFile] = useState("")
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        cPassword: "",
    })
    const [categories, setCat] = useState([])
    const [color, setCol] = useState([])
    const [size, setSize] = useState([])
    const [product, setProduct] = useState({
        title: "",
        desc: "",
        price: "",
        inStock: ""
    })

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]
        setFile(selectedFile)
    }
    const handleInputChange = (event) => {

        const { name, value } = event.target

        if (id === "user") {
            setUser({ ...user, [name]: value })
        }
        else {
            switch (name) {
                case "categories":
                    setCat(value.split(","))
                    break
                case "color":
                    setCol(value.split(","))
                    break
                case "size":
                    setSize(value.split(","))
                    break

                default:
                    setProduct({ ...product, [name]: value })
                    break
            }
        }
    }

    const handleFormSubmit = (e) => {

        e.preventDefault()

        if (!file) {
            alert("Select The Image As Well")
        }
        else {
            const storage = getStorage(app);
            const fileName = new Date().getTime() + file.name //providing uniqueness to the filename
            const storageRef = ref(storage, fileName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                        default:
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        makeReq(downloadURL)
                    });
                }
            );


            // API CALL
            const makeReq = async (img) => {
                if (id === "user") {
                    const res = await publicRequest.post("/api/auth/register", { ...user, img })
                    console.log(res.data)
                }
                else {
                    const res = await userRequest.post("/api/product", { ...product, categories, color, size,img })
                    console.log(res.data)
                }
                window.location.href = `/${id}s` //since "id" is either "user" / "product". to redirect to "users"/"products" routes 
            }
        }
    }

    return (
        <div className="new">
            <Sidebar />
            <div className="new-container">
                <Navbar />
                <div className="add-new">
                    <div className="top"><h1 className="title">{title}</h1></div>
                    <div className="bottom">
                        <div className="left">
                            <div>
                                <img className="avatar"
                                    src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                                    alt="avatar" />
                            </div>
                        </div>
                        <div className="right">
                            <form onSubmit={handleFormSubmit}>

                                <div className="form-input file-input">
                                    <label className="label-file" htmlFor="file"><span>Image:</span> <DriveFolderUploadIcon className="drive-icon" /></label>
                                    <input
                                        type="file"
                                        id="file" style={{ display: "none" }}
                                        onChange={handleFileChange} />
                                </div>

                                {inputs.map(input => {
                                    const { name, type, placeholder, label } = input

                                    return name === "inStock" ? <div key={name} className="form-input">
                                        <label>{label}</label>
                                        <select defaultValue="Select" name={name} onChange={handleInputChange}>
                                            <option value="Select" disabled>Select</option>
                                            <option value="false">No</option>
                                            <option value="true">Yes</option>
                                        </select>
                                    </div> : <div key={name} className="form-input">
                                        <label>{label}</label>
                                        <input name={name} type={type} placeholder={placeholder} onChange={handleInputChange} />
                                    </div>


                                })}

                                <button name={id} type="submit">ADD</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New