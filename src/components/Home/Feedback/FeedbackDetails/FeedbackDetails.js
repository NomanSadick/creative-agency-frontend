import React from 'react';

const FeedbackDetails = ({ client }) => {
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex align-items-center">
                <img className="mx-3" src={client.clientImg} alt="" width="60"/>
                <div>
                    <h6>{client.clientName}</h6>
                    <h6>{client.title}</h6>
                </div>
            </div>
            <div className="card-body">

                <p className="card-text text-secondary mt-4">{client.description}</p>
            </div>
        </div>
    );
};

export default FeedbackDetails;