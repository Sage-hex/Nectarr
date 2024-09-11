import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css'; // Ensure this file is correctly included

const Layout = () => (
    <div className="layout-container">
    <Header />
    <main>
      <Outlet /> {/* This will render the matched child route */}
    </main>
    <Footer />
  </div>
);

export default Layout;