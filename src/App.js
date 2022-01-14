import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Component/Banner/Banner';
import BannerItems from './Component/BannerItems/BannerItems';
import JobItems from './Component/JobItems/JobItems';
import JobResume from './Component/JobResume/JobResume';
import HuntWork from './Component/HuntWork/HuntWork';
import HappyClient from './HappyClient/HappyClient';
import Priceing from './Component/Pricing/Priceing';
import FAQ from './Component/FAQ/FAQ';
import Apps from './Component/Apps/Apps';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="">
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
}

export default App;
