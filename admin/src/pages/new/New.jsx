import "./new.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";

const New = ({ inputs, title, id }) => {

    const [file, setFile] = useState("")
    const [user, setUser] = useState({
        fName: "",
        lName: "",
        phone: "",
        email: "",
        password: "",
        address: "",
        country: "",

    })
    const [product, setProduct] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        stock: "",

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
            setProduct({ ...product, [name]: value })
        }
    }

    const handleFormSubmit = (e) => {

        e.preventDefault()
        console.log(product)
       
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
                                    return <div key={input.id} className="form-input">
                                        <label>{label}</label>
                                        <input value={id === "user" ? user[name] : product[name]} name={name} type={type} placeholder={placeholder} onChange={handleInputChange} />
                                    </div>
                                })}

                                <button type="submit">ADD</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New