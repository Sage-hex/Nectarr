import React from 'react'
import gain from '../../assets/Images/Nectar-Buzz/gain.png';
import './SeeMore.css'


const SeeMore = () => {
  return (
  <>
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
  </>
  )
}

export default SeeMore