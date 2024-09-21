import React, { useState, useEffect } from 'react';
import './LandingHero.css';
import HeroTextImage from '../../assets/Images/Nectar-Buzz/hero-image.jpg';
import Button from '../Button/Button';

const LandingHero = () => {
  const headlines = [
    <h1 key="1" className='hie'>
      HELLO <span style={{ color: 'gold' }}>HO</span>
      <span style={{ color: 'grey' }}>NEY</span>
    </h1>,
    <h1 key="1" className='hie'>
    WELCOME TO<span style={{ color: 'gold' }}> NECTAR</span>
    <span style={{ color: 'grey' }}>BUZZ</span>
  </h1>,
    <h1 key="2"  className='hie'>
      Hi <span style={{ color: 'gold' }}>BEE</span>
      <span style={{ color: 'grey' }}> INTUSIATISTIST</span>
    </h1>,
    <h1 key="3"  className='hie'>
      HELLO <span style={{ color: 'gold' }}> BEE</span>
      <span style={{ color: 'grey' }}> LOVERS</span>
    </h1>,
    <h1 key="4" className='hie'>
      HELLO <span style={{ color: 'gold' }}>HO</span>
      <span style={{ color: 'grey' }}>NEY</span>
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
      <Button>shop now</Button>
    </section>
  );
};

export default LandingHero;
