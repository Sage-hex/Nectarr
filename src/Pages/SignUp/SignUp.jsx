import React from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import signuplogo from "../../assets/Images/signup-logo.png";

const SignUp = () => {
  return (
    <section className="signup-wrapper">
      <div className="signup-container">
        <article className="signup-header">
          <div className="logo">
            <img src={signuplogo} alt="Logo" />
          </div>
          <div className="login-link">
            <p>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
          </div>
        </article>

        <section className="form-section">
          <h1>Create an account</h1>
          <p className="subtext">Sign up now and unlock exclusive access!</p>

          <form className="signup-form">
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                aria-label="First name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                aria-label="Last name"
                required
              />
            </div>
            <div className="input-group">
              <select name="gender" aria-label="Gender" required>
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
              <input
                type="tel"
                name="tel"
                placeholder="Tel"
                aria-label="Telephone"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="location"
                placeholder="Location"
                aria-label="Location"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                aria-label="Confirm password"
                required
              />
            </div>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>

          <p className="terms-text">
            By Clicking Sign Up, you agree to our{" "}
            <a href="/terms">terms and conditions</a>
          </p>
        </section>
      </div>
    </section>
  );
};

export default SignUp;
