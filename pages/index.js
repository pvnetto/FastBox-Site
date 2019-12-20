import React from 'react';

import Navbar from '../components/navbar';
import Jumbotron from '../components/sections/jumbotron';
import About from '../components/sections/about';
import Services from '../components/sections/services';
import Partners from '../components/sections/partners';
import Gallery from '../components/sections/gallery';
import Footer from '../components/sections/footer';
import Layout from '../components/Layout';

const index = () => {
    return (
        <Layout>
            <Navbar />
            <Jumbotron />
            {/* <About />
                <Services />
                <Partners />
                <Gallery />
                <Footer /> */}
        </Layout>
    );
};

export default index;