import React from "react";
import "./Login.css"; // Import the CSS file for styling
import userIcon from "../../assets/Images/user-icon.png"; // Import the user icon image
import Button from "../../Components/Button/Button";
import loginImg from "../../assets/Images/signup-logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {toast, Toaster} from "react-hot-toast";
import axios from "axios";


const LoginForm = () => {
    const nav = useNavigate()

    const Submit = () => {
        toast.success('Login successfull🤗')
        nav('/welcomePage')
    }  
  

    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
   
  
    
    console.log(passWord);
    console.log(email);
   
    
  
    const Login = async (e) => {
      e.preventDefault();
  
      const signUpData = {
        
        email,
        password : passWord,
        
      };
  
      try {
        const url = "https://nectarbuzz.onrender.com/api/v1/log-in";
        const res = await axios.post(url, signUpData,
      );
  
const token = res.data.token;  // Directly access the token, no destructuring needed
localStorage.setItem("token",  token );

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;  // Add space after 'Bearer'
toast.success('Login Successful 🤗🎉');

  
        setTimeout(() => {
          nav("/welcomePage");
        }, 5000);
        
      } catch (err) {
        console.error(err);
        toast.error(err.response.data.message);
        // toast.error('dfghjk')
       
      }
    }
    return (
        // <section className="login-container">
        <section className="login-wrapper">
        <section className="login-form-section">
          <section className="form-header">
            <div className="login-logo">
              <img src={loginImg} alt="logo" />
            </div>
          <div className="user-icon">
            <img src={userIcon} alt="User Icon" />
          </div>
          </section>
           <form className="login-form" action="#" method="POST">
    
            <div class="login-form-group">
                <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e)=>setPassWord(e.target.value)}
                required
              />
              {/*<label for="password">Password</label>*/}
            </div>
            {/* <div className="forget-password">

            </div> */}
            <NavLink to="/forgotpassword" className="forgot-password-link">Forget password</NavLink>
          
            <div className="login-form-actions">
              <Button onClick={Login} >Login</Button>
            </div>
          </form>
          <section className="signup-prompt">
            <p style={{color:'white'}}>
              Don't have an account? <NavLink to="/signup">Sign up</NavLink>
            </p>
          </section>
        </section>
        <Toaster/>
      </section>
        // </section>
    );
};

export default LoginForm;