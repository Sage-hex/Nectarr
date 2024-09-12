import React from 'react';
import './WelcomePage.css'; // CSS file for the styling
import loginImg from "../../assets/Images/signup-logo.png";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const WelcomePage = ({ user }) => {
    const nav = useNavigate()
    return (
        <div className="welcome-wrapper">
      <div className="welcome-box">
      <div className="welcome-logo">
              <img src={loginImg} className='logo' alt="logo" />
            </div>
        <img
          src="https://via.placeholder.com/150" // Replace with actual user image URL
          alt="Profile"
          className="welcome-image"
        />
        <h1 className="welcome-message">Welcome onboard {user}</h1>

        <div className="welcome-icon-container">
          <div className="welcome-icon">
             <FaCheckCircle className='welcome-icon-img'/>
          </div>
         
        </div>

        <p className="welcome-next">What do you want to do next?</p>

        <div className="welcome-actions">
          <button className="btn-home" onClick={()=>nav('/')}>Go back Home</button>
          <button className="btn-shop" onClick={()=>nav('/shop')}>Shop</button>
        </div>
      </div>
    </div>
    );
};

export default WelcomePage;