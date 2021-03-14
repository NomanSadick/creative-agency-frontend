import React from 'react';

const ServiceListDetails = ({status}) => {
    return (
        <div className="col-md-4 border rounded p-3 mb-3 mr-1">
        <div className="d-flex justify-content-between align-items-center mb-3">
        <img style={{ color: 'red' }} src={status?.file?.data} alt=""/>
           
        </div>
        <p><small p style={{ color: 'red' }} className="muted">${status.description}</small></p>
        {status.file.title}
        
    </div>
    );
};

export default ServiceListDetails;