import React from 'react'
import './LoadingPage.css'
import  loadingimg from '../../assets/Images/signup-logo.png'

const LoadingPage = () => {
  return (
    <div className='LoadingPage'>
        <img src={loadingimg} alt="" />
    </div>
  )
}

export default LoadingPage