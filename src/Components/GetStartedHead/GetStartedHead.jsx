import React from 'react'
import './getStartedHead.css'
import { Link } from 'react-router-dom'
import getLogo from '../../assets/Images/signup-logo.png'

const getStartedHead = () => {
  return (
    <div className='getStartedHead'>
      <div className="getStartedHeadWrap">
        <img src={getLogo} alt="" className='getLogo '/>
        <p>Existing Customer?<Link to={'/login'} style={{color:'white'}}> Login</Link> </p>
      </div>
    </div>
  )
}

export default getStartedHead
