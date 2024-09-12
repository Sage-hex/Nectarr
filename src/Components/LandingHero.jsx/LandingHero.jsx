import React, { useState, useEffect } from 'react';
import './LandingHero.css';
import HeroTextImage from '../../assets/Images/Nectar-Buzz/hero-image.jpg'
const LandingHero = () => {


    const phrases = [
        "E SHOCK YOU!",
        "CAN'T BELIEVE THESE DEALS!",
        "AMAZING OFFERS JUST FOR YOU!",
        "EXCLUSIVE DISCOUNTS TODAY!",
        "SHOP NOW AND SAVE BIG!"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <section className="LandingHero">
      <img 
        src={HeroTextImage} 
        alt="Shop Hero" 
        className="Landing-background-image" 
      />
      <article className="Landing-text-overlay">
        <h1>{phrases[currentIndex]}</h1>
      </article>
    </section>
    );
};

export default LandingHero