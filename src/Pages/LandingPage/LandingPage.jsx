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
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import LoadingPage from '../LoadingPage/LoadingPage';


const LandingPage = () => {
  const [loading, setLoading] = useState(true)
    
   setTimeout(() => {
    setLoading(false)
   }, 5000);
    return (
      <>
      {
        loading ? <LoadingPage/>
        : 
        <div className='LandingPage'>
        {/*<HeaderAd/>*/}
          
          <LandingHero/>
        
  
        <FeaturesBox/>
        <WhoWeAre/>
  
        { /*<div className="space"></div>*/}
  
        <Ourservice/>
        <Collection/>
        <SeeMore/>
  
        <UserReview/>
  
        <HoneySection/>
        <NewsLetter/>
  
        {/* <Footer/> */}
    </div>
      }
      </>
  
    )
}

export default LandingPage
