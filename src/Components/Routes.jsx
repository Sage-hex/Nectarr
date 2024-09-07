<<<<<<< HEAD

=======
>>>>>>> 0ccc61656ccff267c024a42e973d295648f2bbe2
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import ResetPasswordAuth from "../Pages/ResetPasswordAuth/ResetPasswordAuth";
import UserHome from "../Pages/UserDashBoard/UserHome";
<<<<<<< HEAD
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
=======
import WelcomePage from "../Pages/WelcomePage/WelcomePage";
import BeekeperSignUp from '../Pages/BeekeperSignUp/Beekeper'
const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/beekeper",
    element: <BeekeperSignUp/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  ,
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  // {
  //     path: 'buyersLogin',
  //     element: <BuyersLogin/>
  // },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  ,
  {
    path: "/resetPasswordauth",
    element: <ResetPasswordAuth />,
  },
  {
    path: "user",
    element: <UserHome />,
  },
]);
>>>>>>> 0ccc61656ccff267c024a42e973d295648f2bbe2

const Routes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
