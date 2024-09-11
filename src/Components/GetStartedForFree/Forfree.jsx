import React from 'react'
import './ForFree.css'
import bro from '../../assets/Images/Nectar-Buzz/bro.png'
import { useNavigate } from 'react-router-dom'

const Forfree = () => {
  const nav = useNavigate()
  return (
    <div className='Forfree'>
      <div className="ForfreeHead">
        <h1>Get Started for FREE</h1>
        <p>Select account type to get Started</p>
      </div>

      <div className="GetStartedBox">
         <div className="MainBox">
            <img src={bro} alt=""  className='GetStartedImage'/>
            <button className='btn' onClick={()=>nav('/signup')}>CUSTOMER</button>
            <p>Earn as you Shop</p>
            <p>Get Points and be Redeemed✨</p>
         </div>
         <div className="MainBox">
            <img src={bro} alt=""  className='GetStartedImage'/>
            <button className='btn' onClick={()=> nav('/beekeeperSignup')}>BEEKEEPER</button>
            <p>Get across to million honey Lovers💘</p>
         </div>
      </div>
    </div>
  )
}

export default Forfree