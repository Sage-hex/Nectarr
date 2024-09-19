import React from 'react'
import './DashboardHeader.css'

const DashboardHeader = () => {
    return (
        <div className="header">
      <div className="header-greeting">
        Welcome, it is a sweet day!
      </div>
      <div className="header-user-info">
        <img src="/path/to/avatar.jpg" alt="User Avatar" className="user-avatar" />
        <button className="notification-btn">
          <img src="/path/to/notification-icon.png" alt="Notifications" />
        </button>
      </div>
    </div>
    );
}

export default DashboardHeader