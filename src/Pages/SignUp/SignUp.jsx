// import React, { useState } from "react";
// import "./SignUp.css";
// import { NavLink } from "react-router-dom";
// import signuplogo from "../../assets/Images/signup-logo.png";
// import Button from "../../Components/Button/Button";
// import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";
// import { BeatLoader } from "react-spinners";
// import LoadingPage from "../LoadingPage/LoadingPage";

// const SignUp = () => {
//   const nav = useNavigate();
  
  
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [passWord, setPassWord] = useState('');
//   const [phoneNo, setPhoneNo] = useState('');
//   const [location, setLocation] = useState('');
//   const [gender, setGender] = useState('');
//   const [load, setLoad] = useState(false)
//   const [loading, setLoading] = useState(true)

//   console.log(firstName);
//   console.log(lastName);
//   console.log(passWord);
//   console.log(gender);
//   console.log(location);
//   console.log(email);
//   console.log(phoneNo);
  

//   const signUp = async (e) => {
//     e.preventDefault();

//     const signUpData = {
//       firstName,
//       lastName,
//       email,
//       password : passWord,
//       phoneNumber:phoneNo,
//       address: location,
//       sex:gender
//     };

//     try {
//       setLoad(true)
//       const url = "https://nectarbuzz.onrender.com/api/v1/user-signup";
//       const res = await axios.post(url, signUpData);
//       console.log(res.data);
//       toast.success('Sign up successful 🎉');
    
      

//       setTimeout(() => {
//       nav("/congrats");
//       }, 3000);
      
//     } catch (err) {
//       console.error(err.response?.data || err);
//       toast.error(err.response?.data?.message || 'An error occurred');
//     } finally {
//       setLoad(false); // Ensure loading is set to false after the request
//     }
  
    
//   }

//   setTimeout(() => {
//      setLoading(false)
//   }, 5000);

//   return (
//     {
//       loading ? <LoadingPage/> 
//       : <>
//       <section className="signup-wrapper">
//       <div className="signup-container">
//         <article className="signup-header">
//           <div className="signup-logo">
//             <img src={signuplogo} alt="Logo" />
//           </div>
//           <div className="signup-login-link">
//             <p>
//               Already have an account? <NavLink to="/login">Login</NavLink>
//             </p>
//           </div>
//         </article>

//         <section className="signup-form-section">
//           <h1>Create an account</h1>
//           <p className="signup-subtext">Sign up now and unlock exclusive access!</p>

//           <form className="signup-form" onSubmit={signUp}>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First name"
//                 aria-label="First name"
//                 required
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last name"
//                 aria-label="Last name"
//                 required
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </div>
//             <div className="input-group">
//               <select name="gender" aria-label="Gender"  onChange={(e) => setGender(e.target.value)}>
//                 <option value="" disabled selected >
//                   Select Gender
//                 </option>
//                 <option value="male" >Male</option>
//                 <option value="female" >Female</option>
//                 <option value="other" >Other</option>
//                 <option value="prefer_not_to_say" >Prefer not to say</option>
//               </select>
//               <input
//                 type="number"
//                 name="tel"
//                 placeholder="Tel"
//                 aria-label="Telephone"
//                 required
//                 onChange={(e) => setPhoneNo(e.target.value)}
//               />
//             </div>
//             <div className="input-group">
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 aria-label="Location"
//                 required
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 aria-label="Email"
//                 required
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="input-group">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 aria-label="Password"
//                 required
//                 onChange={(e) => setPassWord(e.target.value)}
//               />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm password"
//                 aria-label="Confirm password"
//                 required
//               />
//             </div>
//             <div className="signup-btn">
//               <Button type="submit">{load? <BeatLoader/> : 'Sign Up'}</Button>
//             </div>
//           </form>

//           <p className="signup-terms-text">
//             By Clicking Sign Up, you agree to our{""}
//             <NavLink to="/about">terms and conditions</NavLink>
//           </p>
//         </section>
//       </div>
//       <Toaster />
//     </section>
//       </>
//     }
//   );
// };

// export default SignUp;


import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { NavLink, useNavigate } from "react-router-dom";
import signuplogo from "../../assets/Images/signup-logo.png";
import Button from "../../Components/Button/Button";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import LoadingPage from "../LoadingPage/LoadingPage";

const SignUp = () => {
  const nav = useNavigate();
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = async (e) => {
    e.preventDefault();

    if (passWord !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const signUpData = {
      firstName,
      lastName,
      email,
      password: passWord,
      phoneNumber: phoneNo,
      address: location,
      sex: gender
    };

    try {
      setLoad(true);
      const url = "https://nectarbuzz.onrender.com/api/v1/user-signup";
      const res = await axios.post(url, signUpData);
      toast.success('Sign up successful 🎉');
      
      setTimeout(() => {
        nav("/congrats");
      }, 3000);
      
    } catch (err) {
      console.error(err.response?.data || err);
      toast.error(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return loading ? <LoadingPage/> : (
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
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                aria-label="Last name"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <select name="gender" aria-label="Gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
              <input
                type="number"
                name="tel"
                placeholder="Tel"
                aria-label="Telephone"
                required
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="location"
                placeholder="Location"
                aria-label="Location"
                required
                onChange={(e) => setLocation(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                required
                onChange={(e) => setPassWord(e.target.value)}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                aria-label="Confirm password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="signup-btn">
              <Button type="submit">{load ? <BeatLoader/> : 'Sign Up'}</Button>
            </div>
          </form>

          <p className="signup-terms-text">
            By Clicking Sign Up, you agree to our{" "}
            <NavLink to="/about">terms and conditions</NavLink>
          </p>
        </section>
      </div>
      <Toaster />
    </section>
  );
};

export default SignUp;
 