import React, { useEffect, useState } from 'react';
import mamaruka from '../../assets/Images/Nectar-Buzz/mamaruka.jpg';
import mrstan from '../../assets/Images/Nectar-Buzz/mr stanely.jpg';
import "./LandingPage.css"
import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from '../../Components/Footer/Footer';
import HoneySection from '../../Components/HoneySection/HoneySection';
import FeaturesBox from '../../Components/Features/FeaturesBox';
import SeeMore from '../../Components/SeeMore/SeeMore';
import Benefit from '../../Components/Benefit/Benefit';
import WhoWeAre from '../../Components/WhoWeAre/WhoWeAre';
import Ourservice from '../../Components/OurService/Ourservice';
import LandingHero from '../../Components/LandingHero/LandingHero';
import Collection from '../../Components/Collection/Collection';
import UserReview from '../../Components/UserReviews/UserReview';


const LandingPage = () => {

    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     Aos.init();
    // }, []);

    // const phrases = [
    //     "E SHOCK YOU!",
    //     "CAN'T BELIEVE THESE DEALS!",
    //     "AMAZING OFFERS JUST FOR YOU!",
    //     "EXCLUSIVE DISCOUNTS TODAY!",
    //     "SHOP NOW AND SAVE BIG!"
    // ];

    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, [phrases.length]);



    return (
        <div className='LandingPage'>
        {/*<HeaderAd/>*/}
        <LandingHero/>
      

      <FeaturesBox/>
      <WhoWeAre/>

      <div className="space"></div>

      <Ourservice/>
      <Collection/>
      <SeeMore/>

      <UserReview/>

      <HoneySection/>

      {/* <Footer/> */}
    </div>
    )
}

export default LandingPage