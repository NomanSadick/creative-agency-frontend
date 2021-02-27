import React, { } from 'react';


const FeedbackDetails = ({ client }) => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="shadow-sm col-md-3  ml-5 mb-5 px-5">
            <div className="d-flex align-items-center">
                <img style={{ height:'50px'}} className="mx-3 rounded-circle" src={client.photoURL} alt="" width="60" />
                <h6>{client.name}</h6>
            </div>

            <div>
                <p className=" text-secondary mt-4 d-flex justify-content-start pr-5">{client.projectDetails}</p>
            </div>
        </div>
    );
};

export default FeedbackDetails;