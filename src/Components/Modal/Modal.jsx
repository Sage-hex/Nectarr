import React from 'react';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Confirm Logout</h2>
                <p>Are you sure you want to logout?</p>
                <div className="modal-actions">
                    <button onClick={closeModal}>Cancel</button>
                    <button className="logout-btn">Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;