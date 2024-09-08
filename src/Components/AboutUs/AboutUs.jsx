import React from 'react'
import './AboutUs.css'
import Helen from '../../assets/Images/remove.png'


const AboutUs = () => {
  return (
    <div className="AboutUs">
            <h1>About Us</h1>
            <div className="about">
                <div className="aboutText">
                    <p>
                       Discover the Sweetness of Nature
                       Nestles in the heart of Lagos, Nectar Buzz is your go-to
                       destination for the finest honey in town. We are passionate   
                       about bringing you the purest, most delicious honey,
                       sourced directly frm local beekeepers. We are dedicated to
                       bringing you the purest honey straight from local beekeepers.
                       Our mission is to  promote the benefits of honey while supporting
                       sustainable beekeeping practices.
                    </p>
                </div>

                <div className="aboutImg" data-aos="zoom-in">
                    <img src={Helen} alt="" className='round' data-aos="fade-left"/>
                    <img src={Helen} alt="" className='round'/>
                    <img src={Helen} alt="" className='round'/>
                    <img src={Helen} alt="" className='round'/>
                    <img src={Helen} alt="" className='round'/>
                </div>
            </div>
        </div>
  )
}

export default AboutUs