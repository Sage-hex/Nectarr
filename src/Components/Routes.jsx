
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import ResetPasswordAuth from "../Pages/ResetPasswordAuth/ResetPasswordAuth";
import UserHome from "../Pages/UserDashBoard/UserHome";
import Profile from "../Pages/Profile";
import About from "../Pages/About"

const router = createHashRouter([
    {
        path: '/',
        element: <LandingPage/>
    },

    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/Profile',
        element: <Profile/>
    },
    {
        path: '/signup',
        element: <SignUp/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    // {
    //     path: 'buyersLogin',
    //     element: <BuyersLogin/>
    // },
    {
        path: 'forgetPassword',
        element: <ForgotPassword/>
    },
    {
        path: 'ressetPassword',
        element: <ResetPassword/>
    },
    {
        path: 'user',
        element: <UserHome/>
    }


])

const Routes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
