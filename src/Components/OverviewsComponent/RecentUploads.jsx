import React from 'react';
import './RecentUploads.css';

const uploads = [
    { name: 'Tupelo', code: '#TPL-240', date: '6/8/2024', price: '$20', status: 'Reviewed', quantity: 20 },
    { name: 'Raw', code: '#RAW-450', date: '6/8/2024', price: '$17', status: 'Pending', quantity: 17 },
    { name: 'Manuka', code: '#MNK-123', date: '6/8/2024', price: '$30', status: 'Reviewed', quantity: 30 },
];

const RecentUploads = () => {
    return (
        <div className="uploads-list">
      {uploads.map((upload, index) => (
        <div key={index} className="upload-card">
          <p>{upload.name}</p>
          <p>Code: {upload.code}</p>
          <p>Date: {upload.date}</p>
          <p>Price: {upload.price}</p>
          <p>Status: <span className={`status ${upload.status.toLowerCase()}`}>{upload.status}</span></p>
          <p>Quantity: {upload.quantity}</p>
        </div>
      ))}
    </div>
    );
};

export default RecentUploads;