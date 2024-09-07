import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import remove from '../assets/Images/remove.png';
import bee1 from '../assets/Images/Nectar-Buzz/bee1.png';
import honey from '../assets/Images/Nectar-Buzz/honey1.png';
import bee2 from '../assets/Images/Nectar-Buzz/bee2.png';
import bee4 from '../assets/Images/Nectar-Buzz/bee4.png';
import Honey5 from '../assets/Images/Nectar-Buzz/Honey5.jpg';
import HoneyJar1 from '../assets/Images/Nectar-Buzz/HoneyJar1.jpg';
import HoneyJar2 from '../assets/Images/Nectar-Buzz/HoneyJar2.jpg';
import HoneyJar3 from '../assets/Images/Nectar-Buzz/HoneyJar3.jpg';
import HoneyJar4 from '../assets/Images/Nectar-Buzz/HoneyJar4.jpg';
import HoneyJar5 from '../assets/Images/Nectar-Buzz/HoneyJar5.jpg';
import mamaruka from '../assets/Images/Nectar-Buzz/mamaruka.jpg';
import mrstan from '../assets/Images/Nectar-Buzz/mr stanely.jpg';
import gain from '../assets/Images/Nectar-Buzz/gain.png';
import { GiScarabBeetle } from "react-icons/gi";

import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from '../Components/Footer';
import Origin from '../Components/Origin';

const LandingPage = () => {
  // Create an array of states for each box
  const [show, setShow] = useState([false, false, false, false, false]);

  useEffect(() => {
    Aos.init();
  }, []);

  // Function to handle mouse enter
  const handleMouseEnter = (index) => {
    const newShow = [...show];
    newShow[index] = true;
    setShow(newShow);
  };

  // Function to handle mouse leave
  const handleMouseLeave = (index) => {
    const newShow = [...show];
    newShow[index] = false;
    setShow(newShow);
  };

  return (
    <div className='LandingPage'>
      <div className="Hero">
        <Header />
      </div>
      <div className="featuresBox">
        <div className="features" data-aos="fade-right">
          <img src={bee1} alt="" className='remove' />
          <div className="text">
            <h2>features 01</h2>
            <p>Earn as you shop</p>
          </div>
        </div>
        <div className="features two" data-aos="fade-down">
          <img src={honey} alt="" className='remove bee2' />
          <div className="text">
            <h2>features 02</h2>
            <p>Organic Honey</p>
          </div>
        </div>
        <div className="features" data-aos="fade-left">
          <img src={bee2} alt="" className='remove two' />
          <div className="text">
            <h2>features 03</h2>
            <p>Discount on Delivery</p>
          </div>
        </div>
      </div>

      <div className="space"></div>

      <div className="hold">
        <section className='Who'>
          <div className="Benefit">
            <img src={Honey5} alt="" className='Circle' />
            <div className="information">
              <h1> WHO WE ARE</h1>
              <p>Discover the pure sweetness of nature at Nectar Buzz,
                Nigeria’s premier honey store. We offer a wide variety
                of high-quality, locally sourced honey, perfect for your
                daily needs or as a delightful gift for your health and 
                health. Experience the taste of pure, unadulterated 
                honey and enjoy its numerous health benefits. We are
                dedicated to providing the purest and most delicious
                honey. We are passionate about sourcing local and
                high-quality honey from beekeepers across the
                country. Our commitment to sustainability and ethical
                practice ensures that our honey is not only beneficial 
                for your health but also your foods and bakes.  </p>
              <h2 style={{ color: 'black' }}>100% Organic</h2>
            </div>
          </div>
        </section>

        <div className="collections">
          <div className="text">
            <h1>Our Collections</h1>
            <p>We sell Organic Honey and 5 Kinds Of Honey</p>
          </div>

          <section className='items'>
            {[
              { src: HoneyJar1, title: 'Clover Honey', description: 'Clover honey, a popular type of honey, has a rich history dating back centuries. Derived from the nectar of clover plants, this honey is prized for its mild flavor and light color.' },
              { src: HoneyJar2, title: 'Wildflower Honey', description: 'Wildflower honey, a delightful and diverse type of honey, is produced from the nectar of various wildflower plants.' },
              { src: HoneyJar3, title: 'Manuka Honey', description: 'Manuka Honey, a unique type of honey produced in New Zealand, has gained worldwide recognition for its distinctive properties and potential health benefits.' },
              { src: HoneyJar4, title: 'Tupelo Honey', description: 'Tupelo honey, a prized delicacy in the Southern United States, is produced from the nectar of tupelo trees. Known for its light color and mild, floral flavor, tupelo honey has a long history of being enjoyed for its unique taste and potential health benefits.' },
              { src: HoneyJar5, title: 'Acacia Honey', description: 'In the vast, sun-drenched plains of Australia, a colony of bees lived peacefully among the acacia trees. These trees, with their delicate yellow flowers, were a source of sustenance for the bees, providing them with nectar to produce their precious honey.' }
            ].map((item, index) => (
              <div className="Boxhold" key={index}>
                <img src={item.src} alt="" className='box' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} />
                {show[index] && (
                  <div className="absolute" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                    <button className='Clover'>{item.title}</button>
                    <button className='viewMore'>view more</button>
                  </div>
                )}
                <div className="boxText">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <h1>SEE MORE...</h1>
      <section className='Benefit'>
        <img src={gain} alt="" className='Circle' />
        <div className="information">
          <h2>Boost Your Immunity <br /> From Nature And EARN</h2>
          <p>
            Continue shopping at your favorite stores,
            both online and in-person.
            <br />
            Earn rewards: Every purchase you make 
            will earn you points or cashback.
            <br />
            Redeem rewards: Use your accumulated
            points or cashback to get discounts on </p>
          <h1>100% Organic</h1>
        </div>
      </section>

      <section className='Benefit'>
       <div className="information">
          <h1>Benefit of Pure Honey</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis facere excepturi possimus aut.  Corrupti molestiae asperiores, alias enim deleniti beatae non accusamus quasi quibusdam odit tempore ullam,</p>
          <ul>
            <div className='list'><GiScarabBeetle className='icon'/> <span>Promote respectful sleep</span></div>
            <div className='list'><GiScarabBeetle className='icon'/> <span>Promote respectful sleep</span></div>
            <div className='list'><GiScarabBeetle className='icon'/><span>Promote respectful sleep</span></div>
            <div className='list'><GiScarabBeetle className='icon'/> <span>Promote respectful sleep</span></div>
          </ul>
        </div>
        <img src={bee4} alt="" className='Circle'/>
      </section>

      <div className="Stories">
        <h1>Top Stories From Consumers</h1>
        <div className="topStories">
          {/* <div className="story">
            <img src={mamaruka} alt="" className='person'/>
            <p>Locally Sourced and Sustainable:
               "I no dey use sugar, na honey i dey use pass but
                 this one wey una gimme so, as i use am drink my akamu
                 e just go well for my body." -Mummy Joy
            </p>
          </div> */}

          <div className="story">
            <img src={mrstan} alt="" className='person'/>
            <p> "I love the variety of flavors Nectar Buzz offers. From classic 
                 honey to flavored options like manuka and raw honey, 
                 there's something for everyone." - Pa Stanley
            </p>
          </div>
        </div>
      </div>
     
      <Origin/>

      <Footer/>
    </div>
  )
}

export default LandingPage
