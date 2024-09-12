import { createHashRouter } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../Layout/Layout';
import LandingPage from "../../Pages/LandingPage/LandingPage";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ForgotPassword from "../../Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../Pages/ResetPassword/ResetPassword";
import ResetPasswordAuth from "../../Pages/ResetPasswordAuth/ResetPasswordAuth";
import Shop from "../../Pages/Shop/Shop";
import UserHome from "../../Pages/UserDashBoard/UserHome";
import Profile from "../../Pages/Profile/Profile";
import About from "../../Pages/AboutPage/About";
import WelcomePage from '../../Pages/WelcomePage/WelcomePage'
import GetStarted from '../../Pages/GetStarted/GetStarted';
import BeeKeeperSingUp from "../../Pages/BeekeperSignUp/Beekeper"
import Hampper from '../../Pages/Hampper/Hampper';
// import beeKeeperSignUp  from '../../Pages/BeeKeeperSignUp/BeeKeeper '

const router = createHashRouter([


    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <LandingPage /> },
            { path: 'about', element: <About /> },
            { path: 'shop', element: <Shop /> },
            { path: 'hampper', element: <Hampper /> },
            { path: 'user', element: <UserHome /> },
        ],
    },

    { path: 'profile', element: <Profile /> },
    { path: 'getStarted', element: <GetStarted/> },
    { path: 'welcomePage', element: <WelcomePage /> },
    { path: 'beekeeperSignup', element: <BeeKeeperSingUp /> },
    { path: 'signup', element: <SignUp /> },
    { path: 'login', element: <Login /> },
    { path: 'forgotPassword', element: <ForgotPassword /> },
    { path: 'resetPassword', element: <ResetPassword /> },
    { path: 'resetPasswordAuth', element: <ResetPasswordAuth/> },

]);


export default router;