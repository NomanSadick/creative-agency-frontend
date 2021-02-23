import React from 'react';
import Brands from '../Brands/Brands';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Brands></Brands>
            <Services></Services>
            <OurWorks></OurWorks>
            <Feedback></Feedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;