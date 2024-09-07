import React from 'react'
import Header from '../Components/Header'
import remove from '../assets/Images/remove.png'
import { FaCircleUser } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <div className="Hero">
      <Header/>
      </div>
      <div className="featuresBox">
        <div className="features">
          <img src={remove} alt="" className='remove'/>
          <div className="text">
            <h2>features 01</h2>
            <p>Earn as you shop</p>
          </div>
        </div>
        <div className="features two" >
          <img src={remove} alt="" className='remove'/>
          <div className="text">
            <h2>features 02</h2>
            <p>Organic Honey</p>
          </div>
        </div>
        <div className="features">
          <img src={remove} alt="" className='remove two'/>
          <div className="text">
            <h2>features 03</h2>
            <p>Discount on Delivery</p>
          </div>
        </div>
      </div>

      <div className="space"></div>
  
      <div className="collections">
         <div className="text">
           <h1>Our Collections</h1>
           <p>We sell Organic Honey and 5 Kinds Of Honey</p>
          </div>

          <section className='items'>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </section>
      </div>

      <section className='nature'>
        <div className="circle"></div>
        <div className="info">
          <h2>Boost Your Immunity <br /> From Nature</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis facere excepturi possimus aut. Corrupti molestiae asperiores, alias enim deleniti beatae non accusamus quasi quibusdam odit tempore </p>
          <h1>100% Organic</h1>
        </div>
      </section>

      <section className='nature'>
       <div className="info extra">
          <h1>Benefit of Pure Honey</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis facere excepturi possimus aut.  Corrupti molestiae asperiores, alias enim deleniti beatae non accusamus quasi quibusdam odit tempore ullam,</p>
          <ul>
            <div className='list'><FaCircleUser  className='icon'  /> <span>Promote respectful sleep</span></div>
            <div className='list'><FaCircleUser  className='icon'  /> <span>Promote respectful sleep</span></div>
            <div className='list'><FaCircleUser  className='icon'  /> <span>Promote respectful sleep</span></div>
            <div className='list'><FaCircleUser  className='icon'  /> <span>Promote respectful sleep</span></div>
          </ul>
        </div>
        <div className="circle"></div>
      </section>

      <section className='origin'>
        <div className="theOrigin">
          <h3>The Origin</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animi voluptates fuga et provident minima magni ducimus accusantium porro laborum voluptate, beatae aliquam ipsam repellendus nostrum velit? Incidunt, atque laborum?</p>
        </div>
        <div className="theOrigin">
        <h3>Offers On The Buzz</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animi voluptates fuga et provident minima magni ducimus accusantium porro laborum voluptate, beatae aliquam ipsam repellendus nostrum velit? Incidunt, atque laborum?</p>
        </div>
      </section>
      <section className='subscribe'>
        <div className="wrap">
          <p>Subscribe And Win Honey Hampers</p>
          <input type="text" placeholder='Enter Your Email'  className='input'/>
          <button className='button'>Enter</button>
        </div>
      </section>
      <footer>
        <div className="wrapper">
        <p>Hive <span className='hub'>Hub</span></p>
        <h4>A drop of Nature's sweetness</h4>
        <div className="description">
          <div className="location">
           <h3>Location:</h3><span> Plot 2055 Green Estate. Amuwo Odofin Lagos</span>
          </div>
          <div className="location">
           <h3>Phone:</h3><span> 07062810942</span>
          </div>
          <div className="location">
           <h3>Chat:</h3><span> 07062050928</span>
          </div>
          <div className="location">
           <h3>Email:</h3><span>ChatHive@gmail.com</span>
          </div>
        </div>
         <hr />

        <div className="copyright">
          <div className="colabo">
           <FaCircleUser  className='icon'  />
           <FaCircleUser  className='icon'  />
           <FaCircleUser  className='icon'  />
           <FaCircleUser  className='icon'  />
          </div>
          <span>copyright @ 2024 HiveHub. All rights reserved </span>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage