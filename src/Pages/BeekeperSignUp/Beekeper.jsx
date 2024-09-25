import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signuplogo from "../../assets/Images/signup-logo.png";
import Button from "../../Components/Button/Button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; 
import { BeatLoader } from "react-spinners";
import LoadingPage from "../LoadingPage/LoadingPage";

const SignUp = () => {
  const nav = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [licence, setLicence] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      businessLicenseNo: licence,
      sex: gender
    };

    try {
      setIsSubmitting(true);
      const url = "https://nectarbuzz.onrender.com/api/v1/farmer-signup";
      const res = await axios.post(url, signUpData);
      toast.success('Sign up successful 🎉');
      console.log(res.data);

      setTimeout(() => {
        nav("/congrats");
      }, 5000);
    } catch (err) {
      console.error(err.response?.data || err);
      toast.error(err.response?.data?.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return loading ? <LoadingPage /> : (
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
          <p className="signup-subtext">Hello, Let's help You Earn</p>

          <form className="signup-form" onSubmit={signUp}>
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <select name="gender" value={gender} required onChange={(e) => setGender(e.target.value)}>
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
              <input
                type="tel"
                placeholder="Tel"
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassWord(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Business License NO"
                onChange={(e) => setLicence(e.target.value)}
                required
              />
            </div>
            <div className="signup-btn">
              <Button type="submit">
                {isSubmitting ? <BeatLoader color="white" size={10} /> : 'Sign Up'}
              </Button>
            </div>
          </form>

          <p className="signup-terms-text">
            By Clicking Sign Up, you agree to our{" "}
            <NavLink to="/terms">terms and conditions</NavLink>
          </p>
        </section>
      </div>
      <Toaster />
    </section>
  );
};

export default SignUp;
 
