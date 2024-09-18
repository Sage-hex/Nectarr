import React, { useState } from 'react';
import './UserDashboard.css';
import { GrLogin } from 'react-icons/gr';
import Logo from '../../assets/Images/signup-logo.png';
import UserIcon from '../../assets/Images/user-icon.png';
import Modal from '../../Components/Modal/Modal';
import UserDashboardUI from '../../Components/UserDashboardUI/UserDashboardUI'; // Import the new MainContent component

const Dashboard = () => {
    const [selectedMonth, setSelectedMonth] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);

    const handleLogoutClick = () => {
        setModalOpen(true);
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="dashboard-logo">
                    <img src={Logo} className="dashboard-image" alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <li className="active">Overview</li>
                        <li onClick={handleLogoutClick}><GrLogin className="login-icon" />Logout</li>
                    </ul>
                </nav>
            </div>
            <div className="main-content">
                <div className="header">
                    <div className="welcome-message">Welcome, it is a sweet day!</div>
                    <div className="profile-picture"><img src={UserIcon} alt="Profile" /></div>
                </div>

                {/* Render the MainContent component here */}
                <UserDashboardUI selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
            </div>

            {isModalOpen && <Modal closeModal={() => setModalOpen(false)} />}
        </div>
    );
};

export default Dashboard;