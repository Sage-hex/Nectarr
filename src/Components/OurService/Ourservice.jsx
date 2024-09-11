import React from 'react'
import './Ourservice.css'
import Aos from 'aos';
import "aos/dist/aos.css";
// import Service from '../../assets/Images/Nectar-Buzz/ourservice.png'
import Service from '../../assets/Images/Nectar-Buzz/ourservices.png'

const Ourservice = () => {
  return (
    <div className='Ourservice'>
        <h1>OUR SERVICE</h1>

        <div className="Service">
            <img src={Service} alt="service"  data-aos="zoom-in" />
        </div>
    </div>
  )
}

export default Ourservice