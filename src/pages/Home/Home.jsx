import React from 'react';
import Carousel from '../Carousel/Carousel';
import AboutUs from '../../components/AboutUs/AboutUs';
import Service from '../Service/Service/Service';

const Home = () => {
    return (
        <div className=''>
           <Carousel></Carousel>
           <AboutUs></AboutUs>
           <Service></Service>
        </div>
    );
};

export default Home;