import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar'; // Your Sidebar component
import Header from '../Header/DashboardHeader'; // Your Header component
import './AdminDashboard.css'; // Custom styling for your dashboard layout

const DashboardLayout = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />  {/* Static Sidebar */}
        <div className='dashboard-content-wrapper'>
            <div className="dashboard-content">
                <Header />  {/* Static Header */}
                <main className="Main-content">
                    <Outlet />  {/* Render the dashboard routes here */}
                </main>
            </div>
            
        </div>
            
        </div>
    );
};

export default DashboardLayout;