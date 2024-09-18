// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable'; // To create tables in the PDF
// import Button from '../../Components/Button/Button';
// import { MdOutlineFileDownload } from 'react-icons/md';
// import ProductImage from '../../assets/Images/product-img.png';
// import './UserUI.css'


// const UserUI = ({ selectedMonth, setSelectedMonth }) => {
//     const stockData = [
//         { image: ProductImage, itemName: 'PRI Manuka 300', productId: '#MNK-123', quantity: 2, date: '01/8/2024', status: 'Successful' },
//         { image: ProductImage, itemName: 'Kashmir Acacia', productId: '#KHR-233', quantity: 1, date: '01/7/2024', status: 'Unsuccessful' },
//         { image: ProductImage, itemName: 'Nita Hamper', productId: '#NIT-323', quantity: 3, date: '01/6/2024', status: 'Pending' },
//         { image: ProductImage, itemName: 'Nita Hamper', productId: '#NIT-323', quantity: 3, date: '01/6/2024', status: 'Pending' },
//         { image: ProductImage, itemName: 'Nita Hamper', productId: '#NIT-323', quantity: 3, date: '01/6/2024', status: 'Pending' }
//     ];

//     const filteredStockData = stockData.filter(item => {
//         if (!selectedMonth) return true;
//         return item.date.includes(selectedMonth); // Match month in the format MM/YYYY
//     });

//     const getStatusColor = (status) => {
//         switch (status) {
//             case 'Successful':
//                 return {
//                     backgroundColor: '#28a745',
//                     textAlign: 'center',
//                     color: 'white',
//                     borderRadius: '5px',
//                     padding: '2px 8px'
//                 };
//             case 'Unsuccessful':
//                 return {
//                     backgroundColor: '#dc3545',
//                     textAlign: 'center',
//                     color: 'white',
//                     borderRadius: '5px',
//                     padding: '2px 8px'
//                 };
//             case 'Pending':
//                 return {
//                     backgroundColor: '#ffc107',
//                     textAlign: 'center',
//                     color: 'white',
//                     borderRadius: '5px',
//                     padding: '2px 8px'
//                 };
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

//     const handleMonthChange = (e) => {
//         setSelectedMonth(e.target.value);
//     };

//     return (
//         <div className="user-main-content">
//             <div className="summary-section">
//                 <div className="summary-card"><p>New Products:</p><p>0</p></div>
//                 <div className="summary-card"><p>Points:</p><p>1</p></div>
//                 <div className="report-controls">
//                     <select onChange={handleMonthChange}>
//                         <option value="">Select month</option>
//                         <option value="8">August</option>
//                         <option value="7">July</option>
//                         <option value="6">June</option>
//                     </select>
//                     <Button className="export-btn" onClick={handleExport}><MdOutlineFileDownload />Export</Button>
//                 </div>
//             </div>

//             <div className="stock-report">
//                 <h3>Stock Report</h3>
//                 <div className="report-table">
//                     <div className="table-header">
//                         <span>Image</span>
//                         <span>Item Name</span>
//                         <span>Product ID</span>
//                         <span>Quantity</span>
//                         <span>Date</span>
//                         <span>Status</span>
//                     </div>
//                     <div className="table-body">
//                         {filteredStockData.map((item, index) => (
//                             <div className="table-row" key={index}>
//                                 <span><img src={item.image} alt={item.itemName} /></span>
//                                 <span>{item.itemName}</span>
//                                 <span>{item.productId}</span>
//                                 <span>{item.quantity}</span>
//                                 <span>{item.date}</span>
//                                 <span style={getStatusColor(item.status)}>{item.status}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserUI;


import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // To create tables in the PDF
import Button from '../../Components/Button/Button';
import { MdOutlineFileDownload } from 'react-icons/md';
import ProductImage from '../../assets/Images/product-img.png';
import './UserDashboardUI.css'


const UserDashboardUI = ({ selectedMonth, setSelectedMonth }) => {
    const stockData = [
        { image: ProductImage, itemName: 'PRI Manuka 300', productId: '#MNK-123', quantity: 2, date: '01/8/2024', status: 'Successful' },
        { image: ProductImage, itemName: 'Kashmir Acacia', productId: '#KHR-233', quantity: 1, date: '01/7/2024', status: 'Unsuccessful' },
        { image: ProductImage, itemName: 'Nita Hamper', productId: '#NIT-323', quantity: 3, date: '01/6/2024', status: 'Pending' },
        { image: ProductImage, itemName: 'Nita Hamper', productId: '#NIT-323', quantity: 3, date: '01/6/2024', status: 'Pending' },
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
                    padding: '2px 8px'
                };
            case 'Unsuccessful':
                return {
                    backgroundColor: '#dc3545',
                    textAlign: 'center',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '2px 8px'
                };
            case 'Pending':
                return {
                    backgroundColor: '#ffc107',
                    textAlign: 'center',
                    color: 'white',
                    borderRadius: '5px',
                    padding: '2px 8px'
                };
            default:
                return {};
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

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    return (
        <div className="user-main-content">
            <div className="summary-section">
                <div className="summary-card"><p>New Products:</p><p>0</p></div>
                <div className="summary-card"><p>Points:</p><p>1</p></div>
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
    );
};

export default UserDashboardUI;