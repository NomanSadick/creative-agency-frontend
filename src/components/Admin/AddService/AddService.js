import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Slidebar from '../../Customer/Customer/Slidebar/Slidebar';
import { faFileUpload, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
const containerStyle = {
    backgroundColor: "#F4F7FC",
    height: "100%",
    width: "900px",
    marginTop: '20px'
}
const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [file, setFile] = useState(null)
    const { register, handleSubmit, errors } = useForm();
    console.log(loggedInUser);

    const onSubmit = (e) =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', loggedInUser.title)
        formData.append('img', loggedInUser[0].img)
        formData.append('description', loggedInUser.description)   
        
    
        console.log(loggedInUser,"this is all data");
    
        fetch('http://localhost:5000/addService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          if(data){
            alert("data submitted") 
           }
        })
        .catch(error => {
          console.error(error)
        })
        
        // history.push("/orderList"); 
        // e.preventDefault();
    
       }
    const handleBlur = (e) => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo[e.target.name] = e.target.value;
        setLoggedInUser(newUserInfo);
      }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    return (
        <main className="order container-fluid row">
            <div className="row">
                <div className="col-md-3">
                    <Slidebar></Slidebar>
                </div>
                <div style={containerStyle} className="col-md-8 p-4 pr-5 ml-5 mt-5">
                    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '670px' }}>
                        <div className="d-flex justify-content-between bg-white rounded ml-3">
                            <div className="mt-3 ml-3 mb-2">
                                <label for="exampleInputEmail1">Service Title</label>
                                <input onBlur={handleBlur} type="text" name="title" placeholder="Service Title" className="form-control" ref={register({ required: true })} />
                                {errors.service && <span className="text-danger"><small>Service is required</small></span>}
                                <br/>
                                <label for="exampleInputEmail1">Description</label>
                                <textarea onBlur={handleBlur} name="description" placeholder="Description" cols="30" rows="5" className="form-control" ref={register({ required: true })}></textarea>
                                {errors.projectDetails && <span className="text-danger"><small>Description is required</small></span>}
                            </div>

                            <div className=" ml-5">
                                <div className="custom-file ">
                                    <input onChange={handleFileChange} type="file" className="custom-file-input" name="file" id="customFile" />
                                    <label className="p-2 border border-success rounded" style={{ backgroundColor: '#1dd1a1' }} htmlFor="customFile"> <FontAwesomeIcon className="mr-3" icon={faCloudUploadAlt} />Upload Project File</label>
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-dark ml-3 mt-3 pl-5 pr-5 " value="Submit" />

                    </form>
                </div>

            </div>
        </main >
        
    );
};

export default AddService;