// import React from 'react';
// import './Modal.css';

// const Modal = ({ closeModal }) => {
//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <h2>Confirm Logout</h2>
//                 <p>Are you sure you want to logout?</p>
//                 <div className="modal-actions">
//                     <button onClick={closeModal}>Cancel</button>
//                     <button className="logout-btn">Logout</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

const Modal = ({ closeModal }) => {
    const nav = useNavigate();
    const [isLoading, setIsLoading] = useState(false); // Optional loading state

    const handleLogout = () => {
        setIsLoading(true); // Start loading state if needed
        // Your logout logic here
        localStorage.removeItem("token"); // Clear the token
        nav("/farmerLogin"); // Navigate to the sign-in page
        closeModal(); // Close the modal
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Confirm Logout</h2>
                <p>Are you sure you want to logout?</p>
                <div className="modal-actions">
                    <button onClick={closeModal}>Cancel</button>
                    <button className="logout-btn" onClick={handleLogout} disabled={isLoading}>
                        {isLoading ? "Logging out..." : "Logout"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
