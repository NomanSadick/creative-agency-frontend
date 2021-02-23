import React from 'react';
import br1 from '../../../images/logos/airbnb.png'
import br2 from '../../../images/logos/google.png';
import br3 from '../../../images/logos/netflix.png';
import br4 from '../../../images/logos/slack.png';
import br5 from '../../../images/logos/uber.png';
const Brands = () => {
    return (
        <section className="container">
            <div className="row d-flex align-items-center justify-content-center py-3 my-5">
            <div className="col-4 col-lg-2 py-3">
                        <img src={br1} alt="" className="w-75"/>
                    </div>
                    <div className="col-4 col-lg-2 py-3">
                        <img src={br2} alt="" className="w-75"/>
                    </div>
                    <div className="col-4 col-lg-2 py-3">
                        <img src={br3} alt="" className="w-75"/>
                    </div>
                    <div className="col-4 col-lg-2 py-3">
                        <img src={br4} alt="" className="w-75"/>
                    </div>
                    <div className="col-4 col-lg-2 py-3">
                        <img src={br5} alt="" className="w-75"/>    
                    </div>
            </div>

        </section>
    );
};

export default Brands;