import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
    const stockData = [{
            image: '/path-to-image1', // Replace with actual path
            name: 'PRI Manuka 300',
            id: '#MNK-123',
            quantity: 2,
            date: '01/8/2024',
            status: 'Successful',
        },
        {
            image: '/path-to-image2',
            name: 'Kashmir Acacia',
            id: '#KHR-233',
            quantity: 1,
            date: '01/7/2024',
            status: 'Unsuccessful',
        },
        {
            image: '/path-to-image3',
            name: 'Nita Hamper',
            id: '#NIT-323',
            quantity: 3,
            date: '01/6/2024',
            status: 'Pending',
        },
    ];

    return (
        <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">NectarBuzz</h2>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Logouttrg</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="welcome-header">
          <p>Welcome, it is a sweet day!</p>
          <img className="user-profile" src="/path-to-user-image" alt="Profile" /> {/* Replace with actual image */}
        </header>

        <section className="summary-section">
          <div className="summary-card new-products">
            <h3>New Products</h3>
            <p>0</p>
          </div>
          <div className="summary-card points">
            <h3>Points</h3>
            <p>1</p>
          </div>
        </section>

        <section className="report-section">
          <div className="report-header">
            <h2>Stock Report</h2>
            <div className="export-options">
              <select>
                <option>This month</option>
                <option>Last month</option>
              </select>
              <button className="export-btn">Export</button>
            </div>
          </div>

          <div className="stock-report">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Item name</th>
                  <th>Product ID</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((item, index) => (
                  <tr key={index}>
                    <td><img src={item.image} alt={item.name} className="product-image" /></td>
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.quantity}</td>
                    <td>{item.date}</td>
                    <td>
                      <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
    );
};

// export default UserDashboard;