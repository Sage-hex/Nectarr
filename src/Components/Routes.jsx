import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ForgetPassword from "../Pages/Auth/ForgetPassword";
import RessetPasword from "../Pages/Auth/RessetPasword";
import UserHome from "../Pages/UserDashBoard/UserHome";

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
    path: "/login",
    element: <Login />,
  },
  // {
  //     path: 'buyersLogin',
  //     element: <BuyersLogin/>
  // },
  {
    path: "forgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "ressetPassword",
    element: <RessetPasword />,
  },
  {
    path: "user",
    element: <UserHome />,
  },
]);

const Routes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Routes;
