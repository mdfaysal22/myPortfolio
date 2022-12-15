import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Portfolio from './Portfolio/Portfolio';
import Skill from './Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;