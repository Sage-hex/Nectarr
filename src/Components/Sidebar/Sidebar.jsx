// import React from 'react';
// import "./index.css"

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//                 <div className="dashboard-logo">
//                     <img src={Logo} className="dashboard-image" alt="Logo" />
//                 </div>
//                 <nav>
//                     <ul>
//                         <li className="nav-item"><a className="nav-link" href="#">Overview</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#">Messages</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#">Order</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
//                         <li className="nav-item"><a className="nav-link" href="#">Payment</a></li>
//                         <li onClick={handleLogoutClick}><GrLogin className="login-icon" />Logout</li>
//                     </ul>
//                 </nav>
//             </div>
//     );
// };

// export default Sidebar;

// import React from 'react';
// import './Sidebar.css';

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//       <div className="sidebar-logo">
//         <img src="/path/to/logo.png" alt="NectarBuzz" />
//       </div>
//       <ul>
//         <li>Overview</li>
//         <li>Messages</li>
//         <li>Order</li>
//         <li>Product</li>
//         <li>Payment</li>
//       </ul>
//       <button className="logout-btn">Logout</button>
//     </div>
//     );
// };

// export default Sidebar;



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import Logo from '../../assets/Images/signup-logo.png';
import Modal from '../../Components/Modal/Modal';

const Sidebar = () => {
    const [selectedMonth, setSelectedMonth] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);

    const handleLogoutClick = () => {
        setModalOpen(true);
    };



    return (
        <div className="admin-sidebar">
      <div className="sidebar-logo">
        <img src={Logo} alt="NectarBuzz" />
      </div>
      <nav>
      <ul className="sidebar-links">
        <li>
          <NavLink to="/dashboard/overview" activeClassName="active-link">Overview</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/messages" activeClassName="active-link">Messages</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/order" activeClassName="active-link">Order</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/product" activeClassName="active-link">Product</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/payment" activeClassName="active-link">Payment</NavLink>
        </li>
      </ul>
      </nav>
      <button className="logout-btn"onClick={handleLogoutClick}>Logout</button>


        {isModalOpen && <Modal closeModal={() => setModalOpen(false)} />}
    </div>
    );
};

export default Sidebar;