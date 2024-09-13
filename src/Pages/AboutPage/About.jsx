import { useEffect } from 'react'
import './About.css'
import honey1 from '../../assets/Images/Nectar-Buzz/honey1.png'

import HoneySection from '../../Components/HoneySection/HoneySection'

import Aos from 'aos';
import "aos/dist/aos.css";
import AboutUs from '../../Components/AboutUs/AboutUs'
import ChooseUs from '../../Components/ChooseUs/ChooseUs'
import OurBeekeepers from '../../Components/OurBeeKeepers/OurBeekeepers'
import DoYouKnow from '../../Components/DoYouKnow/DoYouKnow'


const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='AboutPage'>
        <div className="About">
           <div className="hero">
                <img src={honey1} alt="" className='honey1'/>
             <div className="heroLeft">
                   <div className="heroMessage">
                      <h1>Nature's <span>Golden</span><span>Buzz</span></h1>
                      <h1>100% Organic</h1>
                      <button className='shopnow'>shop Now</button>
                   </div>
              </div>
              <div className="heroLeft">
                  
              </div>
           </div>
        </div>
    
        <AboutUs/>

       <ChooseUs/>

        <OurBeekeepers/>
       
        <DoYouKnow/>

        <HoneySection/>
         

    </div>
    )
}

export default About