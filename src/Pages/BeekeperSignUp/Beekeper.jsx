import React from "react";
// import "./SignUp.css";
import { NavLink } from "react-router-dom";
import signuplogo from "../../assets/Images/signup-logo.png";
import Button from "../../Components/Button/Button";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; 
 



const SignUp = () => {

    
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [licence, setLicence] = useState('');
  const [gender, setGender] = useState('');

  console.log( "firstname: ",firstName);
  console.log("lastname: ",lastName);
  console.log("password: ",passWord);
  console.log("gender: ",gender);
  // console.log("location: ",location);
  console.log("email: ",email);
  console.log("phone: ",phoneNo);
  

  const signUp = async (e) => {
    e.preventDefault();

    const signUpData = {
      firstName,
      lastName,
      email,
      password : passWord,
      phoneNumber:phoneNo,
      businessLicenseNo:licence,
      sex:gender
    };
console.log("Signup data",signUpData)
    try {
      const url = "https://nectarbuzz.onrender.com/api/v1/farmer-signup";
      const res = await axios.post(url, signUpData);
      toast.success('Sign up successful 🎉');
      console.log(res.data);

      setTimeout(() => {
         nav("/login");
      }, 5000);
       
    } catch (err) {
      console.error(err.data);
      toast.error(err.response.data.message);

     
    }
  
    
  }
  return (
    <section className="signup-wrapper BeeImg">
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
          <h1>Vendor's Verification Form</h1>
          <p className="signup-subtext">Hello, Let's help You Earn </p>

          <form className="signup-form" onSubmit={signUp}>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                aria-label="First name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                aria-label="Last name"
                onChange={(e) => setLastName(e.target.value)}
                required
                
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
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              
              />
              <input
                 type="password"
                 name="password"
                 placeholder="Password"
                 aria-label="Password"
                onChange={(e) => setPassWord(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                 type="password"
                 name="confirmPassword"
                 placeholder="Confirm password"
                 aria-label="Confirm password"
                onChange={(e) => setPassWord(e.target.value)}
                required
              />
              <input
                  type="text"
                name="business Lience NO"
                placeholder="business Lience NO"
                aria-label="Location"
                onChange={(e) => setLicence(e.target.value)}
                required
              />
            </div>
            <div className="signup-btn">
              <Button type="submit">Sign Up</Button>
            </div>
          </form>

          <p className="signup-terms-text">
            By Clicking Sign Up, you agree to our{" "}
            <NavLink to="/terms">terms and conditions</NavLink>
          </p>
        </section>
      </div>
      <Toaster/>
    </section>
  );
};

export default SignUp;
