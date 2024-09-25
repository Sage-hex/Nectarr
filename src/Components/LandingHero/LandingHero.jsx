import React, { useState, useEffect } from 'react';
import './LandingHero.css';
import HeroTextImage from '../../assets/Images/homepicture.png';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const LandingHero = () => {
  const nav = useNavigate()
  const headlines = [
    <h1 key="1" className='hie'>
      HELLO <span style={{ color: 'gold' }}>HO</span>
      <span style={{ color: 'brown' }}>NEY</span>
    </h1>,
    <h1 key="1" className='hie'>
    WELCOME TO<span style={{ color: 'gold' }}> NECTAR</span>
    <span style={{ color: 'brown' }}>BUZZ</span>
  </h1>,
    <h1 key="2"  className='hie'>
      YOUR ONE STOP <span style={{ color: 'gold' }}>STORE FOR</span>
      <span style={{ color: 'brown' }}> QUALITY HONEY</span>
    </h1>,
    // <h1 key="3"  className='hie'>
    //   HELLO <span style={{ color: 'gold' }}> BEE</span>
    //   <span style={{ color: 'grey' }}> LOVERS</span>
    // </h1>,
    <h1 key="4" className='hie'>
      SHOP <span style={{ color: 'gold' }}>HONEY AND</span>
      <span style={{ color: 'brown' }}> EARN</span>
    </h1>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [headlines.length]);

  return (
    <section className="LandingHero">
      <img 
        src={HeroTextImage} 
        alt="Shop Hero" 
        className="Landing-background-image" 
      />
      <article className="Landing-text-overlay" >
        {headlines[currentIndex]}    
      </article>
      <Button onClick={()=>nav('/shop')}>shop now</Button>
    </section>
  );
};

export default LandingHero;
