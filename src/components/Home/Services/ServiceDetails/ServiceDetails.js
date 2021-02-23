import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './ServiceDetails.css'
const ServiceDetails = ({ service }) => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleCardSubmit = (data) => {
        const newCard = {...data}
        setLoggedInUser(newCard)
        history.push("/order")
    }
    // console.log(loggedInUser);
    return (
        <div className="col-md-4 service-card" onClick={()=> handleCardSubmit(service)}>
            <div className="d-flex flex-column justify-content-center align-items-center py-4 my-2">
                <img className="mx-3" src={service.img} alt="" width="60" />
                <p className="font-weight-bolder text-center mt-3 py-2">{service.title}</p>
                <p className="text-muted text-center my-2">{service.description}</p>
            </div>

        </div>
    );
};

export default ServiceDetails;