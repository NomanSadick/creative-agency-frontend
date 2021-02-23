import React from 'react';
import { useForm } from 'react-hook-form';
import Slidebar from '../Customer/Slidebar/Slidebar';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%",
    width: "900px"
}
const Review = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    return (
        <main className="order container-fluid row">
            <div className="row">
                <div className="col-md-2">
                    <Slidebar></Slidebar>
                </div>
                <div style={containerStyle} className="col-md-9 p-4 pr-5 ml-5">
                    <form style={{ maxWidth: '670px' }}>
                        <input type="text" name="name" placeholder="Your name/ Company name" className="form-control" ref={register({ required: true })} />
                        {errors.name && <span className="text-danger"><small>Name is required</small></span>}

                        <br />
                        <input type="text" name="service" placeholder="Graphic Design" className="form-control" ref={register({ required: true })} />
                        {errors.service && <span className="text-danger"><small>Service is required</small></span>}
                        <br />
                        <textarea name="projectDetails" placeholder="Project Details" cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                        {errors.projectDetails && <span className="text-danger"><small>Details is required</small></span>}
                        <br />

                        <br />
                        <input type="submit" className="btn btn-dark pl-5 pr-5 px-4 py-2" value="Send" />
                    </form>
                </div>

            </div>
        </main >
    );
};

export default Review;