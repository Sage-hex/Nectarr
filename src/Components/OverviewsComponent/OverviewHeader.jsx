import React from 'react';
import './OverviewHeader.css';

const OverviewHeader = () => {
    return (
        <div className="overview-header">
      <div className="stat-card">
        <p>All Products</p>
        <h2>5000</h2>
      </div>
      <div className="stat-card">
        <p>All Users</p>
        <h2>10,000</h2>
      </div>
      <div className="stat-card">
        <p>Pending Approvals</p>
        <h2>50</h2>
      </div>
      <div className="stat-card">
        <p>Approved</p>
        <h2>4450</h2>
      </div>
      <div className="stat-card">
        <p>Beekeepers</p>
        <h2>5000</h2>
      </div>
      <div className="action-buttons">
        <select name="month" id="month">
          <option value="this-month">This Month</option>
          {/* Add more months dynamically */}
        </select>
        <button className="export-btn">Export</button>
      </div>
    </div>
    );
};

export default OverviewHeader;