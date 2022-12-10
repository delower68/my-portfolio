import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;