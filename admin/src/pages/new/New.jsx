import "./new.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";

const FormInput = ({ newType }) => {
    return (

        <div className="form-input">
            <label>{newType.label}</label>
            <input type={newType.type} placeholder={newType.placeholder} />
        </div>

    )
}

const New = ({ newType, title }) => {

    const [file, setFile] = useState()

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]
        setFile(selectedFile)
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
                            <form action="">

                                <div className="form-input file-input">
                                    <label className="label-file" htmlFor="file"><span>Image:</span> <DriveFolderUploadIcon className="drive-icon" /></label>
                                    <input
                                        type="file"
                                        id="file" style={{ display: "none" }}
                                        onChange={handleFileChange} />
                                </div>

                                {newType.map(newType => {
                                    return <FormInput key={newType.id} newType={newType} />
                                })}

                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New