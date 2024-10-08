import React from 'react'
import './AboutUs.css'
import Helen1 from '../../assets/Images/Nectar-Buzz/Ellipse 10.png'
import Helen2 from '../../assets/Images/Nectar-Buzz/Ellipse 11.png'
import Helen3 from '../../assets/Images/Nectar-Buzz/Ellipse 12.png'
import Helen4 from '../../assets/Images/Nectar-Buzz/Ellipse 13.png'
import Helen5 from '../../assets/Images/Nectar-Buzz/Ellipse 14.png'
// hello world

const AboutUs = () => {
    return (
        <div className="AboutUs" >
        <h1 className='title'>About Us</h1>
            
            <div className="about">
                <div className="aboutText" data-aos="fade-up" data-aos-duration="1500">
                    
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

                <div className="aboutImg" data-aos="zoom-in" data-aos-duration="1500">
                    <img src={Helen1} alt="" className='round' />
                    <img src={Helen2} alt="" className='round'/>
                    <img src={Helen3} alt="" className='round'/>
                    <img src={Helen4} alt="" className='round'/>
                    <img src={Helen5} alt="" className='round'/>
                </div>
            </div>
        </div>
    )
}


export default AboutUs