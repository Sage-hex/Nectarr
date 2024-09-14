import { useEffect } from 'react'
import './About.css'
import aboutHero from '../../assets/Images/about-hero-bg.png'
import HoneySection from '../../Components/HoneySection/HoneySection'
import Aos from 'aos';
import "aos/dist/aos.css";
import AboutUs from '../../Components/AboutUs/AboutUs'
import ChooseUs from '../../Components/ChooseUs/ChooseUs'
import OurBeekeepers from '../../Components/OurBeeKeepers/OurBeekeepers'
import DoYouKnow from '../../Components/DoYouKnow/DoYouKnow'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Button from '../../Components/Button/Button'


const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='AboutPage'>
        <div className="About">
        <h1 className='hero-text'>We dey <span>BUZZ</span> <br/> FOR YOU <br/>MY<span>GUY</span> <br/><span>WELL WELL</span></h1>
        <Button>shop Now</Button>
                      
        </div>
    
        <AboutUs/>

       <ChooseUs/>

        <OurBeekeepers/>
       
        <DoYouKnow/>

        <HoneySection/>
        <NewsLetter />
         

    </div>
    )
}

export default About