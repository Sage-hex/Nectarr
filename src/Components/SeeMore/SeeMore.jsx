import React from 'react'
import gain from '../../assets/Images/Nectar-Buzz/gain.png';
import './SeeMore.css'
import bee4 from '../../assets/Images/Nectar-Buzz/bee4.png';
import { GiScarabBeetle } from "react-icons/gi";


const SeeMore = () => {
  return (
  <div className='COlABO'>
    <h1>SEE MORE...</h1>
    <section className='Benefit'>
        <img src={gain} alt="" className='Circle' data-aos="fade-right"/>
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
     <img src={bee4} alt="" className='Circle' data-aos="fade-left"/>
   </section>
  </div>
  )
}

export default SeeMore