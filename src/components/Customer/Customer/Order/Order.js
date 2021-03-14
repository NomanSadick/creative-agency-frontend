import React, { useContext, useState } from 'react';
import './Order.css'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import Slidebar from '../Slidebar/Slidebar';
import { UserContext } from '../../../../App';

const containerStyle = {
    backgroundColor: "#F4F7FC",
    height: "100%",
    width: "900px",
    marginTop: '20px'
}
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [file, setFile] = useState(null)
    const { register, handleSubmit, errors } = useForm();
    console.log(loggedInUser);

    const onSubmit = (e) =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('email', loggedInUser.email)
        formData.append('title', loggedInUser.title)
        formData.append('name', loggedInUser.name)
        formData.append('img', loggedInUser[0].file.data)
        formData.append('description', loggedInUser.description)   
        formData.append('price', loggedInUser.price)
        formData.append('status', 'pending')
    
        console.log(loggedInUser,"this is all data");
    
        fetch('http://localhost:5000/order', {
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
                        <input onBlur={handleBlur} type="text" name="name" placeholder="Your name/ Company name" defaultValue={loggedInUser[1]?.name} className="form-control" ref={register({ required: true })} />
                        {errors.name && <span className="text-danger"><small>Name is required</small></span>}
                        <br />
                        <input onBlur={handleBlur} type="email" name="email" placeholder="Your email address" defaultValue={loggedInUser[1]?.email} className="form-control" ref={register({ required: true })} />
                        {errors.email && <span className="text-danger"><small>Email is required</small></span>}
                        <br />
                        <input onBlur={handleBlur} type="text" name="title" placeholder="Graphic Design" defaultValue={loggedInUser[0]?.title} className="form-control" ref={register({ required: true })} />
                        {errors.service && <span className="text-danger"><small>Service is required</small></span>}
                        <br />
                        <textarea onBlur={handleBlur} name="description" placeholder="Project Details" defaultValue={loggedInUser[0]?.description} cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                        {errors.projectDetails && <span className="text-danger"><small>Details is required</small></span>}
                        <br />
                        <div className="row">
                            <div className="col">
                                <input onBlur={handleBlur} type="number" name="price" placeholder="Price" className="form-control" ref={register({ required: true })} />
                                {errors.price && <span className="text-danger"><small>Price is required</small></span>}
                            </div>
                            <div className="col">
                                <div className="custom-file ">
                                    <input onChange={handleFileChange} type="file" className="custom-file-input" name="file" id="customFile" />
                                    <label style={{ backgroundColor: '#1dd1a1' }} className="custom-file-label" htmlFor="customFile"> <FontAwesomeIcon className="mr-5" icon={faCloudUploadAlt} />Upload Project File</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <input type="submit" className="btn btn-dark pl-5 pr-5 px-4 py-2" value="Send" />
                    </form>
                </div>

            </div>
        </main >
    );
};

export default Order;