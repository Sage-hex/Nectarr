import { createHashRouter } from "react-router-dom";
import { useState } from "react";
import Layout from "../Layout/Layout";
import DashboardLayout from "../Layout/AdminDashboard"; // Import new DashboardLayout
import LandingPage from "../../Pages/LandingPage/LandingPage";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import ForgotPassword from "../../Pages/ForgotPassword/ForgotPassword";
import FarmerForget from "../../Pages/ForgotPassword/FarmerForget";
import ResetPassword from "../../Pages/ResetPassword/ResetPassword";
import ResetPasswordAuth from "../../Pages/ResetPasswordAuth/ResetPasswordAuth";
import Shop from "../../Pages/Shop/Shop";
import UserDashboard from "../../Pages/UserDashboard/UserDashboard";
import Profile from "../../Pages/Profile/Profile";
import About from "../../Pages/AboutPage/About";
import WelcomePage from "../../Pages/WelcomePage/WelcomePage";
import GetStarted from "../../Pages/GetStarted/GetStarted";
import BeeKeeperSingUp from "../../Pages/BeekeperSignUp/Beekeper";
import Details from "../../Pages/Details/ViewDetails";
import CartPage from "../../Pages/CartPage/CartPage";
import Hampper from "../../Pages/Hampper/Hampper";
import FarmerLogin from "../../Pages/Login/FarmerLogin";
import FarmerLayout from "../../Pages/FarmersDashboard/FarmerLayout";
import FarmerResetPassword from "../../Pages/ResetPassword/FarmerResetPassword";
import FarmerHomePage from "../../Pages/FarmerHome/FarmerHomePage";
import Checkout from "../../Pages/CheckOut/Checkout";
import Message from "../../Pages/MessagePage/Message";
import HampperProduct from "../HampperProduct/HampperProduct";
// import FarmerHomePage from '../../Pages/FarmersDashboard/FarmerHomePage';
// import GetStarted from '../../Pages/GetStarted /GetStarted ';
// import beeKeeperSignUp  from '../../Pages/BeeKeeperSignUp/BeeKeeper '

// Imported dashboard components
import Overview from "../../Pages/Admin/Overview";
import Messages from "../../Pages/Admin/Messages";
import Order from "../../Pages/Admin/Order";
import Product from "../../Pages/Admin/Products";
import Payment from "../../Pages/Admin/Payment";
import Congrats from "../../Pages/Cograts/Congrats";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "about", element: <About /> },
      { path: "shop", element: <Shop /> },
      { path: "hampper", element: <Hampper /> },
      { path: "details", element: <Details /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },

  { path: "profile", element: <Profile /> },
  { path: "getStarted", element: <GetStarted /> },
  { path: "welcomePage", element: <WelcomePage /> },
  { path: "beekeeperSignup", element: <BeeKeeperSingUp /> },
  { path: "signup", element: <SignUp /> },
  { path: "login", element: <Login /> },
  { path: "farmerLogin", element: <FarmerLogin /> },
  { path: "user", element: <UserDashboard /> },
  { path: "forgotPassword", element: <ForgotPassword /> },
  { path: "farmerforget", element: <FarmerForget /> },
  { path: "resetPassword", element: <ResetPassword /> },
  { path: "farmerResetPassword", element: <FarmerResetPassword /> },
  { path: "resetPasswordAuth", element: <ResetPasswordAuth /> },
  { path: "congrats", element: <Congrats /> },

  // Dashboard section with DashboardLayout wrapping it
  {
    path: "/dashboard",
    element: <DashboardLayout />, // Use DashboardLayout for all dashboard pages
    children: [
      { path: "overview", element: <Overview /> },
      { path: "messages", element: <Messages /> },
      { path: "order", element: <Order /> },
      { path: "product", element: <Product /> },
      { path: "payment", element: <Payment /> },
    ],
  },

  {
    element: <FarmerLayout />,
    children: [
      { path: "farmersHome", element: <FarmerHomePage /> },
      { path: "messagePage", element: <Message /> },
      { path: "hamperProduct", element: <HampperProduct /> },
    ],
  },

  // {
  //     element:<FarmerLayout/>,
  //     children:[
  //         {path: 'farmersHome', element: <FarmerHomePage/> },
  //         {path: 'messagePage', element: <Message/> }
  //     ]
  //  }
]);

export default router;
