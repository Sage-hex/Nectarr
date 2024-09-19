import React from "react";
import "./ResetPassword.css"; // Updated CSS file
import userIcon from "../../assets/Images/user-icon.png"; // Import the user icon image
import Button from "../../Components/Button/Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const FarmerResetPassword = () => {
  
  const [passWord, setPassWord] = useState('');
 

  
  console.log(passWord);
 
  

  const CreatePassword = async (e) => {
    e.preventDefault();

    const signUpData = {
      password : passWord
    };

    try {
      const url = "https://nectarbuzz.onrender.com/api/v1/";
      const res = await axios.post(url, signUpData);
      console.log(res.data);
      toast.success('Password Created Successfully 🤗🎉');
      

      setTimeout(() => {
        nav("/");
      }, 5000);
      
    } catch (err) {
      console.error(err);
      // toast.error(err.response.data.message);
      toast('hgfgdfdz')
     
    }
  }



    return (
        <section className="resetpassword-wrapper">
      <section className="resetpassword-form-section">
        <section className="resetpassword-form-header">
          <div className="resetpassword-title">
            <p>Password Recovery</p>
          </div>
          <div className="resetpassword-message">
            <p>Create New Password</p>
          </div>
        </section>
        <form className="resetpassword-form" action="#" method="POST">
          <div className="resetpassword-form-group">
          <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                style={{paddingLeft:'30px'}}
                onChange={(e)=>setPassWord(e.target.value)}
                required
              />
            <label htmlFor="Confirm password">Create Password</label>
          </div>
          <div className="resetpassword-form-group">
          <input
                type="password"
                name="confirmPassword"
                placeholder=" "
                aria-label="Confirm password"
                onChange={(e)=>setPassWord(e.target.value)}
                required
              />
            <label htmlFor="Confirm password">Confirm password</label>
          </div>
          <div className="resetpassword-form-actions">
            <Button onClick={CreatePassword }>Send OTP</Button>
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

export default FarmerResetPassword;