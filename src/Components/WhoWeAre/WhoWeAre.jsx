import React from 'react'
import '../SeeMore/SeeMore.css'
import Collection from '../../Components/Collections/Collection';
import HoneyDrop from '../../assets/Images/Nectar-Buzz/HoneyDrop.png';


import './WhoWeAre.css'

const WhoWeAre = () => {
  return (
    <div className="hold">
        <section className='Who'>
          <div className="Benefit">
            <img src={HoneyDrop} alt="" className='Circle' />
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

        <Collection/>
      </div>
  )
}

export default WhoWeAre