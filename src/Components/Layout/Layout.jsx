// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from '../Header/Header2';
// import Footer from '../Footer/Footer';
// import './Layout.css';
// import HeaderAd from '../../Components/HeaderAd/HeaderAd'
// import LandingPage from "../../Pages/LandingPage/LandingPage";


// const Layout = () => (
//     <div className="layout-container">
//     {LandingPage && <HeaderAd />}
//     <Header />
//     <main>
//       <Outlet />
//       </main>
//     <Footer />
//   </div>
// );

// export default Layout;

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header2';
import Footer from '../Footer/Footer';
import './Layout.css';
import HeaderAd from '../../Components/HeaderAd/HeaderAd';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="layout-container">
      {location.pathname === '/' && <HeaderAd />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
    );
};

export default Layout;