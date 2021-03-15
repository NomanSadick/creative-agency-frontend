import React, { useEffect, useState } from 'react';
import Slidebar from '../Customer/Slidebar/Slidebar';

const containerStyle = {
    backgroundColor: "#F4F7FC",
    height: "100%",
    width: "900px",
    marginTop: '20px'
}
const ServiceList = () => {
    const [status, setStatus] = useState()

    useEffect(() => {
        fetch('https://shrouded-fortress-62693.herokuapp.com/serviceStatus')
            .then(res => res.json())
            .then(data => setStatus(data))
    }, [])
    console.log(status);
    return (
        <div className="row order container-fluid">
            <div className="row">
                <div className="col-md-3">
                <Slidebar></Slidebar>
                </div>
                <div style={containerStyle} className="col-md-8 p-4 pr-5 ml-5 mt-5">
                    <div className="shadow-sm col-md-3  ml-5 mb-5 px-5">
                        <div className="d-flex align-items-center">
                            <img style={{ height: '50px' }} className="mx-3 rounded-circle" src={status?.file?.data} alt="" width="60" />
                            <h6>{ }</h6>
                        </div>

                        <div>
                            <p style={{ backgroundColor: 'red' }} className=" text-secondary mt-4 d-flex justify-content-start pr-5">{ }</p>
                            <h2>{status?.file?.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;