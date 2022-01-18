import React from 'react';
import HappyClient from '../../HappyClient/HappyClient';
import Apps from '../Apps/Apps';
import Banner from '../Banner/Banner';
import BannerItems from '../BannerItems/BannerItems';
import FAQ from '../FAQ/FAQ';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HuntWork from '../HuntWork/HuntWork';
import JobItems from '../JobItems/JobItems';
import JobResume from '../JobResume/JobResume';
import Priceing from '../Pricing/Priceing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerItems></BannerItems>
            <JobItems></JobItems>
            <JobResume></JobResume>
            <HuntWork></HuntWork>
            <HappyClient></HappyClient>
            <Priceing></Priceing>
            <FAQ></FAQ>
            <Apps></Apps>
            <Footer></Footer>
        </div>
    );
};

export default Home;