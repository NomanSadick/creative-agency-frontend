import React from 'react';
import frame from '../../../images/logos/Frame.png'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main className="container header-bg">
            <div className="row pt-3 pb-5 d-flex align-items-center mt-5">
                <div className="col-md-4 offset-md-1">
                    <h1 className="font-weight-bold">Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eveniet eligendi nesciunt suscipit facilis totam.</p>
                    <button className="btn btn-dark px-4">Hire Us</button>
                </div>
                <div className="col-md-6">
                    <img src={frame} alt="" className="img-fluid w-100"/>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;