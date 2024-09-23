import React, { useState, useEffect } from "react";
import "./HeroText.css";
import HeroTextImage from "../../assets/Images/HeroTextBg.jpg";
const HeroText = () => {
  // This is the Array of phrases for the hero page
  const phrases = [
    "E SHOCK YOU!",
    "CAN'T BELIEVE THESE DEALS!",
    "AMAZING OFFERS JUST FOR YOU!",
    "EXCLUSIVE DISCOUNTS TODAY!",
    "SHOP NOW AND SAVE BIG!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change the hero text every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval); // This Cleans up the interval each time the component unmounts
  }, [phrases.length]);

  return (
    <section className="hero-container">
      <img
        src={HeroTextImage} // Replace with the actual path to your shop hero image
        alt="Shop Hero"
        className="hero-background-image"
      />
      <article className="hero-text-overlay">
        <h1>{phrases[currentIndex]}</h1>
      </article>
      {/*<button>Thame</button>*/}
    </section>
  );
};

export default HeroText;
