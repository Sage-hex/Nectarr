import React from "react";
import './HoneySection.css';
import hive from '../../assets/Images/Nectar-Buzz/hive.png'
import honeyTop from '../../assets/Images/Nectar-Buzz/honeyTop.png'
import honeyIcon from '../../assets/Images/Nectar-Buzz/honeyText.png'

const HoneySection = () => {
    return (
        <div className="honey-section">
      {/*<h1 className="honey-title">Honey</h1>*/}
        <img src={honeyIcon} className='honey-text-icon' alt="honey-icon"/>
      <div className="honey-cards">
        {/* The Origin Card */}
        <div className="honey-card">
          <h2>The Origin</h2>
          <p>
            Honey use and production has a long and varied history, with its beginnings
            in prehistoric times. Several cave paintings in Cuevas de la Araña in Spain depict.
            <a href="#">Learn more</a>
          </p>
          <img
            className="honey-icon"
            src={honeyTop}
            alt="Honey Icon"
          />
        </div>
        {/* Offers On The BUZZ Card */}
        <div className="honey-card">
          <h2>Offers On The BUZZ</h2>
          <p>
            Discounts on delivery fees. Shop and earn points on the go. Get daily tips on DIY 
            once you log in and subscribe to our channel or podcast.
            <a href="#">Read more</a>
          </p>
          <img
            className="buzz-icon"
            src={honeyTop}
            alt="Buzz Icon"
          />
        </div>
      </div>
      <div className='hive-wrapper'><img src={hive} alt="hive"/></div>
    </div>
    );
};

export default HoneySection;