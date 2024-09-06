import React from 'react'
import honeyT from '../assets/Images/Nectar-Buzz/honeyText.png'
import honeyTop from '../assets/Images/Nectar-Buzz/honeyTop.png'
import hive from '../assets/Images/Nectar-Buzz/hive.png'

const Origin = () => {
  return (
    <>
          <section className='origin'>
        <img src={honeyT} alt="" className='HoneyT'/>
      
        <div className="theOrigin">
          <h3>The Origin</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animi voluptates fuga et provident minima magni ducimus accusantium porro laborum voluptate, beatae aliquam ipsam repellendus nostrum velit? Incidunt, atque laborum?</p>
        </div>
        <div className="theOrigin">
        <div className="Top">
        <h3>Offers On The Buzz</h3>
        <img src={honeyTop} alt="" className='HoneyTop' />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis animi voluptates fuga et provident minima magni ducimus accusantium porro laborum voluptate, beatae aliquam ipsam repellendus nostrum velit? Incidunt, atque laborum?</p>
        </div>
        <img src={hive} alt="" className='hive'/>
      </section>
      <section className='subscribe'>
        <div className="wrap">
          <h2>Subscribe And Win Honey Hampers</h2>
          <input type="text" placeholder='Enter Your Email'  className='input'/>
          <button className='button'>Enter</button>
        </div>
      </section>
    </>
  )
}

export default Origin