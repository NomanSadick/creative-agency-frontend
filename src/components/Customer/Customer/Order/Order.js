import React, { useContext } from 'react';
import './Order.css'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import Slidebar from '../Slidebar/Slidebar';
import { UserContext } from '../../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
    width: "900px"
}
const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors, reset } = useForm();
    console.log(loggedInUser);
    return (
        <main className="order container-fluid row">
           
            <div className="row">
                
                <div className="col-md-2">
                    <Slidebar></Slidebar>
                </div>
                <div style={containerStyle} className="col-md-9 p-4 pr-5 ml-5">
                    <form style={{ maxWidth: '670px' }}>
                        <input type="text" name="name" placeholder="Your name/ Company name" defaultValue={loggedInUser[1]?.name} className="form-control" ref={register({ required: true })} />
                        {errors.name && <span className="text-danger"><small>Name is required</small></span>}
                        <br />
                        <input type="email" name="email" placeholder="Your email address"  defaultValue={loggedInUser[1]?.email} className="form-control" ref={register({ required: true })} />
                        {errors.email && <span className="text-danger"><small>Email is required</small></span>}
                        <br />
                        <input type="text" name="service" placeholder="Graphic Design"  defaultValue={loggedInUser[0]?.title} className="form-control" ref={register({ required: true })} />
                        {errors.service && <span className="text-danger"><small>Service is required</small></span>}
                        <br />
                        <textarea name="projectDetails" placeholder="Project Details"  defaultValue={loggedInUser[0]?.description} cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                        {errors.projectDetails && <span className="text-danger"><small>Details is required</small></span>}
                        <br />
                        <div className="row">
                            <div className="col">
                                <input type="number" name="price" placeholder="Price" className="form-control" ref={register({ required: true })} />
                                {errors.price && <span className="text-danger"><small>Price is required</small></span>}
                            </div>
                            <div className="col">
                                <div className="custom-file ">

                                    <input type="file" className="custom-file-input" name="file" id="customFile" />
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