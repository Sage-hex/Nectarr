<<<<<<< HEAD
import React from "react";
import "./Login.css"; // Import the CSS file for styling
import userIcon from "../../assets/Images/user-icon.png"; // Import the user icon image
import Button from "../../Components/Button/Button";
import loginImg from "../../assets/Images/signup-logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const nav = useNavigate()
  const Submit =()=>{
    alert('Login successfull🤗')
      nav('/welcomePage')
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
                id="email"
                name="email"
                placeholder=" "
                required
              />
              <label for="email">Email</label>
            </div>
            <div class="login-form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
                required
              />
              <label for="password">Password</label>
            </div>
            {/* <div className="forget-password">

            </div> */}
            <NavLink to="/forgotpassword" className="forgot-password-link">Forget password</NavLink>
          
            <div className="login-form-actions">
              <Button onClick={Submit} >Login</Button>
            </div>
          </form>
          <section className="signup-prompt">
            <p>
              Don't have an account? <NavLink to="/signup">Sign up</NavLink>
            </p>
          </section>
        </section>
      </section>
    // </section>
  );
};

export default LoginForm;
=======
import React from "react";
import "./Login.css"; // Import the CSS file for styling
import userIcon from "../../assets/Images/user-icon.png"; // Import the user icon image
import Button from "../../Components/Button/Button";
import loginImg from "../../assets/Images/signup-logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const nav = useNavigate()
  const Submit =()=>{
    alert('Login successfull🤗')
      nav('/welcomePage')
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
                id="email"
                name="email"
                placeholder=" "
                required
              />
              <label for="email">Email</label>
            </div>
            <div class="login-form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder=" "
                required
              />
              <label for="password">Password</label>
            </div>
            {/* <div className="forget-password">

            </div> */}
            <NavLink to="/forgotpassword" className="forgot-password-link">Forget password</NavLink>
          
            <div className="login-form-actions">
              <Button onClick={Submit} >Login</Button>
            </div>
          </form>
          <section className="signup-prompt">
            <p>
              Don't have an account? <NavLink to="/signup">Sign up</NavLink>
            </p>
          </section>
        </section>
      </section>
    // </section>
  );
};

export default LoginForm;
>>>>>>> main
