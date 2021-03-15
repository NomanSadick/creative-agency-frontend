import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Slidebar from '../Customer/Slidebar/Slidebar';
const containerStyle = {
    backgroundColor: "#F4F7FC",
    height: "100%",
    width: "900px",
    marginTop: '20px'
}
const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState()
    console.log(loggedInUser);
    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => {
       data.photoURL = loggedInUser[1].image;
        
        fetch('https://shrouded-fortress-62693.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert(' Review created succesfully')
                }
                // console.log(success);
            })
        console.log(data);

    };
    return (
        <main className="order container-fluid row">
            <div className="row">
                <div className="col-md-3">
                    <Slidebar></Slidebar>
                </div>
                <div style={containerStyle} className="col-md-8 p-4 pr-5 ml-5 mt-5">
                    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '670px' }}>
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
                        <input type="submit" className="btn btn-dark pl-5 pr-5 px-4 py-2" value="Submit" />
                    </form>
                </div>

            </div>
        </main >
    );
};

export default Review;