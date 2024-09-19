// import React, { useState } from 'react';
// import { Doughnut, Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import './Overviews.css';

// // Register Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

// const Overview = () => {
//     // Mock data for recent uploads and orders
//     const [recentUploads, setRecentUploads] = useState([
//         { product: 'Tupello', code: '#TPL-240', date: '6-8-2024', price: 'Reviewed', quantity: 20 },
//         { product: 'Raw', code: '#RAW-450', date: '6-8-2024', price: 'Pending', quantity: 17 },
//         { product: 'Manuka', code: '#MNK-123', date: '6-8-2024', price: 'Reviewed', quantity: 30 },
//         // Add other data as needed...
//     ]);

//     const [selectedDate, setSelectedDate] = useState('This month');

//     // Data for charts
//     const doughnutData = {
//         labels: ['Online', 'Offline'],
//         datasets: [{
//             data: [65, 35],
//             backgroundColor: ['#4CAF50', '#FF9800'],
//         }, ],
//     };

//     const barData = {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         datasets: [{
//             label: 'Sales',
//             backgroundColor: '#FFD700',
//             data: [20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 90000, 80000, 75000],
//         }, ],
//     };

//     const doughnutOptions = {
//         responsive: true,
//         plugins: {
//             legend: { display: true, position: 'bottom' },
//             tooltip: { enabled: true },
//         },
//         animation: { animateScale: true },
//     };

//     const barOptions = {
//         responsive: true,
//         plugins: {
//             tooltip: { enabled: true, callbacks: { label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}` } },
//         },
//     };

//     // Handle export as PDF
//     const handleExport = () => {
//         const doc = new jsPDF('landscape');
//         doc.setFontSize(16);
//         doc.text('Overview Report', 14, 20);

//         doc.autoTable({
//             head: [
//                 ['Product', 'Code', 'Date', 'Price', 'Quantity']
//             ],
//             body: recentUploads.map(upload => [upload.product, upload.code, upload.date, upload.price, upload.quantity]),
//         });

//         doc.save('overview-report.pdf');
//     };

//     // Handle date filter for recent uploads
//     const handleDateFilter = (e) => {
//         const selected = e.target.value;
//         setSelectedDate(selected);
//         // Filter logic here if needed...
//     };

//     return (
//         <div className="overview">
//       <div className="overview-header">
//         <h1>Overview</h1>
//         <select onChange={handleDateFilter} value={selectedDate}>
//           <option value="This month">This month</option>
//           <option value="Last month">Last month</option>
//           <option value="Last 6 months">Last 6 months</option>
//         </select>
//         <button className="export-btn" onClick={handleExport}>Export</button>
//       </div>

//       <div className="overview-grid">
//         {/* Metrics */}
//         <div className="metric">All Product<br /><span>5000</span></div>
//         <div className="metric">All User<br /><span>10,000</span></div>
//         <div className="metric">All Pending<br /><span>50</span></div>
//         <div className="metric">All Approved<br /><span>4450</span></div>
//         <div className="metric">All Beekeeper<br /><span>5000</span></div>

//         {/* Charts */}
//         <div className="chart">
//           <Doughnut data={doughnutData} options={doughnutOptions} />
//           <p>Total Sales: $300,000</p>
//         </div>
//         <div className="top-seller">
//           <img src="tupello.png" alt="Top Seller" />
//           <p>Top Seller: Tupello - 65% Online, 35% Offline</p>
//         </div>
//         <div className="chart">
//           <Bar data={barData} options={barOptions} />
//         </div>
//       </div>

//       <div className="recent-section">
//         <h2>Recent Upload</h2>
//         <div className="recent-uploads">
//           {recentUploads.map((upload, index) => (
//             <div key={index} className="upload-card">
//               <p><strong>{upload.product}</strong></p>
//               <p>{upload.code}</p>
//               <p>{upload.date}</p>
//               <p>{upload.price}</p>
//               <p>{upload.quantity}</p>
//             </div>
//           ))}
//         </div>

//         <h2>Recent Order</h2>
//         <div className="recent-orders">
//           {/* Replace with actual order data */}
//           <div className="order">#8000 Wildflower</div>
//           <div className="order">#7500 Raw</div>
//           <div className="order">#5999 Tupello</div>
//           <div className="order">#2500 Manuka</div>
//         </div>
//       </div>
//     </div>
//     );
// };

// export default Overview;



// // import React from 'react';
// // import OverviewHeader from '../../Components/OverviewsComponent/OverviewHeader';
// // import SalesOverview from '../../Components/OverviewsComponent/SalesOverview';
// // import RecentUploads from '../../Components/OverviewsComponent/RecentUploads';
// // import RecentOrders from '../../Components/OverviewsComponent/RecentOrders';
// // import ReviewReport from '../../Components/OverviewsComponent/ReviewReport';
// // import './Overviews.css'


// // const Overviews = () => {
// //     return (
// //         <div className="dashboard">
// //       <OverviewHeader />
// //       <SalesOverview />
// //       <RecentUploads />
// //       {/*<RecentOrders />*/}
// //       {/*<ReviewReport />*/}
// //     </div>
// //     );
// // };

// // export default Overviews;


import React, { useState } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Overviews.css';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Overview = () => {
    // Mock data for recent uploads and orders
    const [recentUploads, setRecentUploads] = useState([
        { product: 'Tupello', code: '#TPL-240', date: '6-8-2024', status: 'Reviewed', quantity: 20 },
        { product: 'Raw', code: '#RAW-450', date: '6-8-2024', status: 'Pending', quantity: 17 },
        { product: 'Manuka', code: '#MNK-123', date: '6-8-2024', status: 'Reviewed', quantity: 30 },
        { product: 'Acacia', code: '#KHR-233', date: '6-8-2024', status: 'Reviewed', quantity: 15 },
        { product: 'Wildflower', code: '#WDF-190', date: '6-8-2024', status: 'Reviewed', quantity: 18 },
        { product: 'Hamper', code: '#NIT-323', date: '6-8-2024', status: 'Reviewed', quantity: 32 },
    ]);

    const [selectedDate, setSelectedDate] = useState('This month');

    // Chart data and options
    const doughnutData = {
        labels: ['Online', 'Offline'],
        datasets: [{
            data: [65, 35],
            backgroundColor: ['#4CAF50', '#FF9800'],
        }, ],
    };

    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Sales',
            backgroundColor: '#FFD700',
            data: [20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 90000, 80000, 75000],
        }, ],
    };

    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: { display: true, position: 'bottom' },
            tooltip: { enabled: true },
        },
    };

    const barOptions = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem) => `$${tooltipItem.raw.toLocaleString()}`,
                },
            },
        },
    };

    // Handle export as PDF
    const handleExport = () => {
        const doc = new jsPDF('landscape');
        doc.setFontSize(16);
        doc.text('Overview Report', 14, 20);

        // Mock data export
        doc.autoTable({
            head: [
                ['Product', 'Code', 'Date', 'Status', 'Quantity']
            ],
            body: recentUploads.map(upload => [upload.product, upload.code, upload.date, upload.status, upload.quantity]),
        });

        doc.save('overview-report.pdf');
    };

    // Handle date filter
    const handleDateFilter = (e) => {
        setSelectedDate(e.target.value);
        // Add date filter logic here...
    };

    return (
        <div className="overview">
      {/* Header */}
      <div className="overview-header">
        <h1>Overview</h1>
        <div className="overview-controls">
          <select onChange={handleDateFilter} value={selectedDate}>
            <option value="This month">This month</option>
            <option value="Last month">Last month</option>
            <option value="Last 6 months">Last 6 months</option>
          </select>
          <button className="export-btn" onClick={handleExport}>Export</button>
        </div>
      </div>

      {/* Top Metrics */}
      <div className="metrics">
        <div className="metric-box">
          <p>All Product</p>
          <span>5000</span>
        </div>
        <div className="metric-box">
          <p>All User</p>
          <span>10,000</span>
        </div>
        <div className="metric-box">
          <p>All Pending</p>
          <span>50</span>
        </div>
        <div className="metric-box">
          <p>All Approved</p>
          <span>4450</span>
        </div>
        <div className="metric-box">
          <p>All Beekeeper</p>
          <span>5000</span>
        </div>
      </div>

      {/* Charts */}
      <div className="charts">
        <div className="chart-box">
          <Doughnut data={doughnutData} options={doughnutOptions} />
          <p className="chart-label">Total Sales: $300,000</p>
        </div>
        <div className="chart-box">
          <img src="tupello.png" alt="Top Seller" className="top-seller-img" />
          <p className="chart-label">Top Seller</p>
          <p className="chart-detail">65% Online, 35% Offline</p>
        </div>
        <div className="chart-box">
          <Bar data={barData} options={barOptions} />
          <p className="chart-label">Sales Overview</p>
        </div>
      </div>

      {/* Recent Uploads & Orders */}
      <div className="recent-section">
        <div className="recent-uploads">
          <h2>Recent Upload</h2>
          <div className="upload-cards">
            {recentUploads.map((upload, index) => (
              <div key={index} className="upload-card">
                <p>{upload.product}</p>
                <p>{upload.code}</p>
                <p>{upload.date}</p>
                <p>{upload.status}</p>
                <p>{upload.quantity}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="recent-orders">
          <h2>Recent Order</h2>
          <div className="order-cards">
            {/* Replace with actual order data */}
            <div className="order-card">#8000 Wildflower</div>
            <div className="order-card">#7500 Raw</div>
            <div className="order-card">#5999 Tupello</div>
            <div className="order-card">#2500 Manuka</div>
          </div>
        </div>
      </div>

      {/* Review Report */}
      <div className="review-report">
        <h2>Review Report</h2>
        <div className="review-card">
          <p>Product: Raw</p>
          <p>Beekeeper's Name: Joe Adhaka</p>
          <p>Date: 6/8/2024</p>
          <p>Status: <span className="status-pending">Not Yet</span></p>
        </div>
      </div>
    </div>
    );
};

export default Overview;