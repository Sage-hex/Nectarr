// import React from 'react';
// import './UserDashboard.css'; // External CSS for better separation of concerns
// import Button from '../../Components/Button/Button'
// import { MdOutlineFileDownload } from "react-icons/md";
// import { GrLogin } from "react-icons/gr";
// import Logo from '../../assets/Images/signup-logo.png'
// import UserIcon from '../../assets/Images/user-icon.png'

// const Dashboard = () => {
//         // Sample stock data, replace this with API data later
//         const stockData = [{
//                 image: 'image1.jpg',
//                 itemName: 'PRI Manuka 300',
//                 productId: '#MNK-123',
//                 quantity: 2,
//                 date: '01/8/2024',
//                 status: 'Successful',
//             },
//             {
//                 image: 'image2.jpg',
//                 itemName: 'Kashmir Acacia',
//                 productId: '#KHR-233',
//                 quantity: 1,
//                 date: '01/7/2024',
//                 status: 'Unsuccessful',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image3.jpg',
//                 itemName: 'Nita Hamper',
//                 productId: '#NIT-323',
//                 quantity: 3,
//                 date: '01/6/2024',
//                 status: 'Pending',
//             },
//             {
//                 image: 'image2.jpg',
//                 itemName: 'Kashmir Acacia',
//                 productId: '#KHR-233',
//                 quantity: 1,
//                 date: '01/7/2024',
//                 status: 'Unsuccessful',
//             },
//             {
//                 image: 'image2.jpg',
//                 itemName: 'Kashmir Acacia',
//                 productId: '#KHR-233',
//                 quantity: 1,
//                 date: '01/7/2024',
//                 status: 'Unsuccessful',
//             },
//         ];

//         return (
//                 <div className="dashboard-container">
//       <div className="sidebar"> {/* Sidebar */}

//         <div className='dashbaord-logo'>
//          <img src={Logo} alt=""Logo/>

//         </div>

//         <nav>
//           <ul>
//             <li>Overview</li>
//             <li><GrLogin className='login-icon'/>
// Logout</li>
//           </ul>
//         </nav>
//       </div>
//       <div className="main-content"> {/* Main Content */}
//         <div className="header">
//           <div className="welcome-message">
//             Welcome, it is a sweet day!
//           </div>
//           <div className="profile-picture">
//             <img src={UserIcon} alt="Profile" />
//           </div>
//         </div>

//         <div className="summary-section">
//           <div className="summary-card">
//             <p>New Products</p>
//             <p>0</p>
//           </div>
//           <div className="summary-card">
//             <p>Points</p>
//             <p>1</p>
//           </div>
//            <div className="summary-car report-controls">
//                  <select>
//                    <option>This month</option>
//                    <option>Last month</option>
//                  </select>
//                  <Button className = "export-btn"><MdOutlineFileDownload />Export</Button>
//                </div>
//         </div>

//         <div className="stock-report">
//           <h3>Stock Report</h3>
//           <div className="report-table">
//             <div className="table-header">
//               <span>Image</span>
//               <span>Item Name</span>
//               <span>Product ID</span>
//               <span>Quantity</span>
//               <span>Date</span>
//               <span>Status</span>
//             </div>
//             <div className="table-body">
//               {stockData.map((item, index) => (
//                 <div className="table-row" key={index}>
//                   <span><img src={item.image} alt={item.itemName} /></span>
//                   <span>{item.itemName}</span>
//                   <span>{item.productId}</span>
//                   <span>{item.quantity}</span>
//                   <span>{item.date}</span>
//                   <span>{item.status}</span>
//                 </div>
//               ))}
//             </div>
//           </div> <
//         /div> < /
//         div > <
//         /div>
//     );
// };

// export default Dashboard;

// import React from 'react';
// import './UserDashboard.css'; // External CSS for better separation of concerns
// import Button from '../../Components/Button/Button'
// import { MdOutlineFileDownload } from "react-icons/md";
// import { GrLogin } from "react-icons/gr";
// import Logo from '../../assets/Images/signup-logo.png'
// import UserIcon from '../../assets/Images/user-icon.png'
// import ProductImage from '../../assets/Images/product-img.png'

// const Dashboard = () => {
//     // Sample stock data, replace this with API data later
//     const stockData = [{
//             image: ProductImage,
//             itemName: 'PRI Manuka 300',
//             productId: '#MNK-123',
//             quantity: 2,
//             date: '01/8/2024',
//             status: 'Successful',
//         },
//         {
//             image: ProductImage,
//             itemName: 'Kashmir Acacia',
//             productId: '#KHR-233',
//             quantity: 1,
//             date: '01/7/2024',
//             status: 'Unsuccessful',
//         },
//         {
//             image: ProductImage,
//             itemName: 'Nita Hamper',
//             productId: '#NIT-323',
//             quantity: 3,
//             date: '01/6/2024',
//             status: 'Pending',
//         },
//     ];

//     const getStatusColor = (status) => {
//         switch (status) {
//             case 'Successful':
//                 return {
//                     backgroundColor: '#28a745',
//                     textAlign: 'center',
//                     color: 'white',
//                     borderRadius: '5px',
//                     padding: '2px 8px' // Reduced horizontal padding
//                 }; // Green for successful
//             case 'Unsuccessful':
//                 return {
//                     backgroundColor: '#dc3545',
//                     textAlign: 'center',
//                     color: 'white',
//                     borderRadius: '5px',
//                     padding: '2px 8px' // Reduced horizontal padding
//                 }; // Red for unsuccessful
//             case 'Pending':
//                 return {
//                     backgroundColor: '#ffc107',
//                     textAlign: 'center',
//                     color: 'white',
//                     borderRadius: '5px',
//                     padding: '2px 8px' // Reduced horizontal padding
//                 }; // Orange for pending
//             default:
//                 return {}; // Default styling if no match
//         }
//     };


//     return (
//         <div className="dashboard-container">
//             <div className="sidebar">
//                 <div className='dashbaord-logo'>
//                     <img src={Logo} alt="Logo"/>
//                 </div>
//                 <nav>
//                     <ul>
//                         <li>Overview</li>
//                         <li><GrLogin className='login-icon'/>Logout</li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className="main-content">
//                 <div className="header">
//                     <div className="welcome-message">
//                         Welcome, it is a sweet day!
//                     </div>
//                     <div className="profile-picture">
//                         <img src={UserIcon} alt="Profile" />
//                     </div>
//                 </div>

//                 <div className="summary-section">
//                     <div className="summary-card">
//                         <p>New Products</p>
//                         <p>0</p>
//                     </div>
//                     <div className="summary-card">
//                         <p>Points</p>
//                         <p>1</p>
//                     </div>
//                     <div className="summary-car report-controls">
//                         <select>
//                             <option>This month</option>
//                             <option>Last month</option>
//                         </select>
//                         <Button className = "export-btn">
//                             <MdOutlineFileDownload />Export
//                         </Button>
//                     </div>
//                 </div>

//                 <div className="stock-report">
//                     <h3>Stock Report</h3>
//                     <div className="report-table">
//                         <div className="table-header">
//                             <span>Image</span>
//                             <span>Item Name</span>
//                             <span>Product ID</span>
//                             <span>Quantity</span>
//                             <span>Date</span>
//                             <span>Status</span>
//                         </div>
//                         <div className="table-body">
//                             {stockData.map((item, index) => (
//                                 <div className="table-row" key={index}>
//                                     <span><img src={item.image} alt={item.itemName} /></span>
//                                     <span>{item.itemName}</span>
//                                     <span>{item.productId}</span>
//                                     <span>{item.quantity}</span>
//                                     <span>{item.date}</span>
//                                     <span style={{ ...getStatusColor(item.status) }}>
//                                         {item.status}
//                                     </span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;




// const getStatusStyle = (status) => {
//        switch (status) {
//            case 'Successful':
//                return { backgroundColor: '#28a745', color: 'white', borderRadius: '5px', padding: '5px' }; // Green for successful
//            case 'Unsuccessful':
//                return { backgroundColor: '#dc3545', color: 'white', borderRadius: '5px', padding: '5px' }; // Red for unsuccessful
//            case 'Pending':
//                return { backgroundColor: '#ffc107', color: 'white', borderRadius: '5px', padding: '5px' }; // Orange for pending
//            default:
//                return {}; // Default styling if no match
//        }
//    };

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // To create tables in the PDF
import './UserDashboard.css';
import Button from '../../Components/Button/Button';
import { MdOutlineFileDownload } from 'react-icons/md';
import { GrLogin } from 'react-icons/gr';
import Logo from '../../assets/Images/signup-logo.png';
import UserIcon from '../../assets/Images/user-icon.png';
import ProductImage from '../../assets/Images/product-img.png';
import Modal from '../../Components/Modal/Modal'; // Modal component

const Dashboard = () => {
    const [selectedMonth, setSelectedMonth] = useState(''); // Store the selected month
    const [isModalOpen, setModalOpen] = useState(false);

    const stockData = [
        { image: ProductImage, itemName: 'PRI Manuka 300', productId: '#MNK-123', quantity: 2, date: '01/8/2024', status: 'Successful' },
        { image: ProductImage, itemName: 'Kashmir Acacia', productId: '#KHR-233', quantity: 1, date: '01/7/2024', status: 'Unsuccessful' },
        { image: ProductImage, itemName: 'Nita Hamper', productId: '#NIT-323', quantity: 3, date: '01/6/2024', status: 'Pending' }
    ];

    const filteredStockData = stockData.filter(item => {
        if (!selectedMonth) return true;
        return item.date.includes(selectedMonth); // Match month in the format MM/YYYY
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'Successful':
                return {
                    backgroundColor: '#28a745',
                    textAlign: 'center',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '2px 8px' // Reduced horizontal padding
                }; // Green for successful
            case 'Unsuccessful':
                return {
                    backgroundColor: '#dc3545',
                    textAlign: 'center',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '2px 8px' // Reduced horizontal padding
                }; // Red for unsuccessful
            case 'Pending':
                return {
                    backgroundColor: '#ffc107',
                    textAlign: 'center',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '2px 8px' // Reduced horizontal padding
                }; // Orange for pending
            default:
                return {}; // Default styling if no match
        }
    };

    const handleExport = () => {
        const doc = new jsPDF();
        doc.text('Stock Report', 10, 10);
        doc.autoTable({
            head: [
                ['Item Name', 'Product ID', 'Quantity', 'Date', 'Status']
            ],
            body: filteredStockData.map(item => [item.itemName, item.productId, item.quantity, item.date, item.status]),
        });
        doc.save('stock_report.pdf');
    };

    const handleLogoutClick = () => {
        setModalOpen(true);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
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

                <div className="summary-section">
                    <div className="summary-card"> <p>New Products:</p><p>0</p></div>
                    <div className="summary-card"><p>Points:</p><p>1</p> </div>
                    <div className="report-controls">
                        <select onChange={handleMonthChange}>
                            <option value="">Select month</option>
                            <option value="8">August</option>
                            <option value="7">July</option>
                            <option value="6">June</option>
                        </select>
                        <Button className="export-btn" onClick={handleExport}><MdOutlineFileDownload />Export</Button>
                    </div>
                </div>

                <div className="stock-report">
                    <h3>Stock Report</h3>
                    <div className="report-table">
                        <div className="table-header">
                            <span>Image</span>
                            <span>Item Name</span>
                            <span>Product ID</span>
                            <span>Quantity</span>
                            <span>Date</span>
                            <span>Status</span>
                        </div>
                        <div className="table-body">
                            {filteredStockData.map((item, index) => (
                                <div className="table-row" key={index}>
                                    <span><img src={item.image} alt={item.itemName} /></span>
                                    <span>{item.itemName}</span>
                                    <span>{item.productId}</span>
                                    <span>{item.quantity}</span>
                                    <span>{item.date}</span>
                                    <span style={getStatusColor(item.status)}>{item.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && <Modal closeModal={() => setModalOpen(false)} />}
        </div>
    );
};

export default Dashboard;





// below is he testing cas

// import React, { useState } from 'react';
// import './UserDashboard.css';
// import Button from '../../Components/Button/Button';
// import { MdOutlineFileDownload } from "react-icons/md";
// import { GrLogin } from "react-icons/gr";
// import Logo from '../../assets/Images/signup-logo.png';
// import UserIcon from '../../assets/Images/user-icon.png';
// import ProductImage from '../../assets/Images/product-img.png';

// const Dashboard = () => {
//     const [selectedMonth, setSelectedMonth] = useState('');
//     const [activeTab, setActiveTab] = useState('overview'); // state to track active tab
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const stockData = [
//         { image: ProductImage, itemName: 'PRI Manuka 300', productId: '#MNK-123', quantity: 2, date: '01/8/2024', status: 'Successful' },
//         { image: ProductImage, itemName: 'Kashmir Acacia', productId: '#KHR-233', quantity: 1, date: '01/7/2024', status: 'Unsuccessful' },
//         { image: ProductImage, itemName: 'Nita Hamper', productId: '#NIT-323', quantity: 3, date: '01/6/2024', status: 'Pending' }
//     ];

//     const filteredStockData = stockData.filter(item => {
//         if (!selectedMonth) return true;
//         return item.date.includes(selectedMonth); // Match month in the format MM/YYYY
//     });

//     const getStatusColor = (status) => {
//         switch (status) {
//             case 'Successful':
//                 return { backgroundColor: '#28a745', color: 'white' };
//             case 'Unsuccessful':
//                 return { backgroundColor: '#dc3545', color: 'white' };
//             case 'Pending':
//                 return { backgroundColor: '#ffc107', color: 'white' };
//             default:
//                 return {};
//         }
//     };

//     const handleExport = () => {
//         const doc = new jsPDF();
//         doc.text('Stock Report', 10, 10);
//         doc.autoTable({
//             head: [
//                 ['Item Name', 'Product ID', 'Quantity', 'Date', 'Status']
//             ],
//             body: filteredStockData.map(item => [item.itemName, item.productId, item.quantity, item.date, item.status]),
//         });
//         doc.save('stock_report.pdf');
//     };

//     const handleLogoutClick = () => {
//         setIsModalVisible(true); // Show modal when logout is clicked
//     };

//     const closeModal = () => {
//         setIsModalVisible(false);
//     };
//     const handleMonthChange = (e) => {
//         setSelectedMonth(e.target.value);
//     };


//     return (
//         <div className="dashboard-container">
//             <div className="sidebar">
//                 <div className='dashboard-logo'>
//                     <img src={Logo} alt="Logo"/>
//                 </div>
//                 <nav>
//                     <ul>
//                         <li className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</li>
//                         <li onClick={handleLogoutClick}>
//                             <GrLogin className='login-icon'/>Logout
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className="main-content">
//                                 <div className="header">
//                     <div className="welcome-message">Welcome, it is a sweet day!</div>
//                     <div className="profile-picture"><img src={UserIcon} alt="Profile" /></div>
//                 </div>
//                 <div className="summary-section">
//                     <div className="summary-card">New Products: 0</div>
//                     <div className="summary-card">Points: 1</div>
//                     <div className="summary-card report-controls">
//                         <select onChange={handleMonthChange}>
//                             <option value="">Select month</option>
//                             <option value="8">August</option>
//                             <option value="7">July</option>
//                             <option value="6">June</option>
//                         </select>
//                         <Button className="export-btn" onClick={handleExport}><MdOutlineFileDownload />Export</Button>
//                     </div>
//                 </div>
//                 <div className="stock-report">
//                     <h3>Stock Report</h3>
//                     <div className="report-table">
//                         <div className="table-header">
//                             <span>Image</span>
//                             <span>Item Name</span>
//                             <span>Product ID</span>
//                             <span>Quantity</span>
//                             <span>Date</span>
//                             <span>Status</span>
//                         </div>
//                         <div className="table-body">
//                             {filteredStockData.map((item, index) => (
//                                 <div className="table-row" key={index}>
//                                     <span><img src={item.image} alt={item.itemName} /></span>
//                                     <span>{item.itemName}</span>
//                                     <span>{item.productId}</span>
//                                     <span>{item.quantity}</span>
//                                     <span>{item.date}</span>
//                                     <span style={getStatusColor(item.status)}>{item.status}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>


//             </div>

//             {/* Modal for logout confirmation */}
//             {isModalVisible && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h3>Are you sure you want to log out?</h3>
//                         <div className="modal-actions">
//                             <button onClick={() => alert('Logging out')}>Yes</button>
//                             <button onClick={closeModal}>No</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;