import React, { useState } from "react";
import "./Login.css"; // Import the CSS file for styling
import userIcon from "../../assets/Images/user-icon.png"; // Import the user icon image
import Button from "../../Components/Button/Button";
import loginImg from "../../assets/Images/signup-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userResData } from "../../Global/slice";
import BeatLoader from 'react-spinners/BeatLoader'; // Corrected import

const LoginForm = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');

    const Login = async (e) => {
        e.preventDefault();

        const signUpData = {
            email,
            password: passWord,
        };

        try {
            const url = "https://nectarbuzz.onrender.com/api/v1/log-in";
            setLoading(true);
            const res = await axios.post(url, signUpData);
            dispatch(userResData(res?.data?.data));
            const token = res.data.token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            toast.success('Login Successful 🤗🎉');
            setTimeout(() => {
                nav("/welcomePage");
            }, 5000);
        } catch (err) {
            setLoading(false);
            console.error(err);
            toast.error(err.response.data.message);
        }
    }

    return (
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
                <form className="login-form" onSubmit={Login}>
                    <div className="login-form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            aria-label="Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassWord(e.target.value)}
                            required
                        />
                    </div>
                    <NavLink to="/forgotpassword" className="forgot-password-link">Forget password</NavLink>
                    <div className="login-form-actions">
                        <Button onClick={Login}>
                            {loading ? <BeatLoader size={10} color="#ffffff" /> : 'Login'}
                        </Button>
                    </div>
                </form>
                <section className="signup-prompt">
                <p style={{ color: 'white' }}>
                        Login as a Beekeeper<NavLink to="/farmerLogin"> Login</NavLink>
                    </p>
                    <p style={{ color: 'white' }}>
                        Don't have an account? <NavLink to="/signup">Sign up</NavLink>
                    </p>
                     
                </section>
            </section>
            <Toaster />
        </section>
    );
};

export default LoginForm;
