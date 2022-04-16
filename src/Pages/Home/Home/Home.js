import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h3>Home</h3>
            <Hero></Hero>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;