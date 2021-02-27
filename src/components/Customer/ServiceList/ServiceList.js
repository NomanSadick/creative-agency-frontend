import React from 'react';
import Slidebar from '../Customer/Slidebar/Slidebar';

const containerStyle = {
    backgroundColor: "#F4F7FC",
    height: "100%",
    width: "900px",
    marginTop: '20px'
}
const ServiceList = () => {
    return (
        <div className="row order container-fluid">
            <div className="row">
                <div className="col-md-3">
                <Slidebar></Slidebar>
                </div>
                <div style={containerStyle} className="col-md-8 p-4 pr-5 ml-5 mt-5">
                    <div className="shadow-sm col-md-3  ml-5 mb-5 px-5">
                        <div className="d-flex align-items-center">
                            <img style={{ height: '50px' }} className="mx-3 rounded-circle" src="" alt="" width="60" />
                            <h6>{ }</h6>
                        </div>

                        <div>
                            <p className=" text-secondary mt-4 d-flex justify-content-start pr-5">{ }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;