import React from "react";
import { useState, useEffect } from "react";
import "./ForgotPassword.css";
import userIcon from "../../assets/Images/user-icon.png"; 
import Button from "../../Components/Button/Button";
import { NavLink } from "react-router-dom";
import {toast, Toaster} from "react-hot-toast";
import axios from "axios";

const FarmerForgot = () => {


  const [passWord, setPassWord] = useState('');
 

  
  console.log(passWord);
 
  

  const ForgetPW = async (e) => {
    e.preventDefault();
    const signUpData = {  
      password : passWord
      
    };

    try {
      const url = "https://nectarbuzz.onrender.com/api/v1/forgot-password/farmer";
      const res = await axios.post(url, signUpData);
      console.log(res.data);
      // toast.success('vyw 🤗🎉');
      

      setTimeout(() => {
        nav("/ressetPassword");
      }, 5000);
      
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
    }
  }
  

    return (
        <section className="forgotpassword-wrapper">
      <section className="forgotpassword-form-section">
        <section className="forgotpassword-form-header">
          <div className="forgotpassword-title">
            <p>It's ok to Forget!</p>
          </div>
          <div className="forgotpassword-message">
           <p> Enter the email address associated with <br /> your account</p>
          </div>
        </section>
        <form className="forgotpassword-form" action="#" method="POST">
          <div className="forgotpassword-form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e)=>setPassWord(e.target.value)}
            />
            { /*<label htmlFor="email">Email</label>*/}
          </div>
          <div className="forgotpassword-form-actions">
          <Button onClick={ForgetPW}>Send OTP</Button>
            
          </div>
        </form>
        <section className="signup-prompt">
          <p>
            Want to Go Back? <NavLink to="/login">Go Back</NavLink>
          </p>
        </section>
      </section>
      <Toaster/>
    </section>
    );
};

export default FarmerForgot;