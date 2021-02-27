import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import Slidebar from '../../Customer/Customer/Slidebar/Slidebar';
import { faFileUpload, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
const containerStyle = {
    backgroundColor: "#F4F7FC",
    height: "100%",
    width: "900px",
    marginTop: '20px'
}
const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {


    };
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
                                <input type="text" name="service" placeholder="Service Title" className="form-control" ref={register({ required: true })} />
                                {errors.service && <span className="text-danger"><small>Service is required</small></span>}
                                <br/>
                                <label for="exampleInputEmail1">Description</label>
                                <textarea name="projectDetails" placeholder="Description" cols="30" rows="5" className="form-control" ref={register({ required: true })}></textarea>
                                {errors.projectDetails && <span className="text-danger"><small>Description is required</small></span>}
                            </div>

                            <div className=" ml-5">
                                <div className="custom-file ">
                                    <input type="file" className="custom-file-input" name="file" id="customFile" />
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