import React, { useState } from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import signuplogo from "../../assets/Images/signup-logo.png";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const SignUp = () => {
  const nav = useNavigate();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  console.log(username);
  console.log(email);
  console.log(passWord);
  console.log(phoneNo);
  console.log(location);
  console.log(address);
  console.log(gender);
  

  const signUp = async (e) => {
    e.preventDefault();

    if (!username || !email || !passWord || !phoneNo || !location || !address || !gender) {
      alert('All fields are required');
      return;
    }

    const signUpData = {
      username,
      email,
      passWord,
      phoneNo,
      location,
      address,
      gender
    };
    

    try {
      const url = "https://nectarbuzz.onrender.com/api/v1/user-signup";
      const res = await axios.post(url, signUpData);
      alert('Sign up successful 🎉🎉');
      console.log(res.data);


      // nav("/login"); /
    } catch (err) {
      toast.error('Sign up failed');
      console.error(err);
    }
  };

 
  

  return (
    <section className="signup-wrapper">
      <div className="signup-container">
        <article className="signup-header">
          <div className="signup-logo">
            <img src={signuplogo} alt="Logo" />
          </div>
          <div className="signup-login-link">
            <p>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
          </div>
        </article>

        <section className="signup-form-section">
          <h1>Create an account</h1>
          <p className="signup-subtext">Sign up now and unlock exclusive access!</p>

          <form className="signup-form" onSubmit={signUp}>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                aria-label="First name"
                required
                onChange={(e)=>setUserName(e.target.value)}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                aria-label="Last name"
                required
                onChange={(e)=>setUserName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <select name="gender" aria-label="Gender" required onChange={(e)=>setGender(e.target.value)}>
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
                onChange={(e)=>setPhoneNo(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="location"
                placeholder="Location"
                aria-label="Location"
                required
                onChange={(e)=>setLocation(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                required
                onChange={(e)=>setPassWord(e.target.value)}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                aria-label="Confirm password"
                required
                onChange={(e)=>setUserName(e.target.value)}
              />
            </div>
            <div className="signup-btn">
              <Button type="submit"  >Sign Up</Button>
            </div>
          </form>

          <p className="signup-terms-text">
            By Clicking Sign Up, you agree to our{" "}
            <NavLink to="/about">terms and conditions</NavLink>
          </p>
        </section>
      </div>
    </section>
  );
};

export default SignUp;
