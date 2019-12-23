import React from 'react';

import Navbar from '../components/navbar';
import Jumbotron from '../components/sections/jumbotron';
import About from '../components/sections/about';
import Services from '../components/sections/services';
import Partners from '../components/sections/partners';
import Gallery from '../components/sections/gallery';
import Footer from '../components/sections/footer';
import Reset from '../components/layout/Reset';
import FooterNote from '../components/sections/footer/FooterNote';

const index = () => {
    return (
        <Reset>
            <Navbar />
            <Jumbotron />
            <About />
            <Services />
            <Partners />
            <Gallery />
            <Footer />
            <FooterNote />
        </Reset>
    );
};

export default index;