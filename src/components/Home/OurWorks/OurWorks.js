import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel'
import '../../../../node_modules/react-owl-carousel2/src/owl.carousel.css'
import '../../../../node_modules/react-owl-carousel2/src/owl.theme.default.css'

import carousel1 from '../../../images/carousel-1.png'
import carouse2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'


const OurWorks = () => {
    const options = {
        items: 2,
        rewind: true,
        autoplay: true,
        center: true,
        lazyLoad: true,
        loop: true,
        margin: 21
    };
    return (

        <section className="bg-dark">
            <div className="container py-5">
            <h1 className='text-center font-weight-bold py-5 mb-4 text-white'>Here are some of  <span className="text-success">our works</span></h1>
            <OwlCarousel options={options}>
                <div><img height="400px" src={carousel1} alt="" className="w-100" /></div>
                <div><img height="400px" src={carouse2} alt="" className="w-100" /></div>
                <div><img height="400px" src={carousel3} alt="" className="w-100" /></div>
            </OwlCarousel>
            </div>
        </section>
    );
};

export default OurWorks;