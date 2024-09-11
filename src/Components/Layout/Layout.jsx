import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css'; // Ensure this file is correctly included

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  
    return(
      <div className="layout-container">
        <Header context={{showModal, setShowModal}} />
        <main>
          <Outlet context={{showModal, setShowModal}}/> 
        </main>
    <Footer />
   </div>
    )
};

export default Layout;