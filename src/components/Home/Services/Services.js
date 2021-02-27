import React, { useEffect, useState } from 'react';
// import service1 from '../../../images/icons/service1.png'
// import service2 from '../../../images/icons/service2.png'
// import service3 from '../../../images/icons/service3.png'
import ServiceDetails from './ServiceDetails/ServiceDetails';

// const serviceData = [
//     {
//         title: 'Web & Mobile Design',
//         img: service1,
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eveniet eligendi nesciunt suscipit facilis totam'
//     },
//     {
//         title: 'Graphic Design',
//         img: service2,
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eveniet eligendi nesciunt suscipit facilis totam'
//     },
//     {
//         title: 'Web Development',
//         img: service3,
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eveniet eligendi nesciunt suscipit facilis totam'
//     },

// ]
const Services = () => {
    const [service, setService] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <section className="container">
            <h1 className='text-center font-weight-bold py-4 mb-4'>Provide awesome <span className="text-success">services</span></h1>
            <div className="row justify-content-center align-items-center mb-5">

                {
                    service && service.map((service => <ServiceDetails key={service._id} service={service}></ServiceDetails>))
                }

            </div>
        </section>
    );
};

export default Services;