import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './ServiceDetails.css'
import service1 from '../../../../images/icons/service1.png'
const ServiceDetails = ({ service }) => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleCardSubmit = (data) => {
        const newCard = {...data}
        setLoggedInUser(newCard)
        history.push("/order")
    }
    console.log(service);
    console.log(loggedInUser);
    return (
        <div className="col-md-4 service-card" onClick={()=> handleCardSubmit(service)}>
            <div className="d-flex flex-column justify-content-center align-items-center py-4 my-2">
            
                {
                    service.file ? <img style={{ width: '50px', height: '50px' }}src={`data:image/png;base64,${service?.image?.img}`} alt=""/>
                    :
                    <img src={service?.image?.img} alt=""/>
                }
           
                <p className="font-weight-bolder text-center mt-3 py-2">{service.title}</p>
                <p className="text-muted text-center my-2">{service.description}</p>
            </div>

        </div>
    );
};

export default ServiceDetails;