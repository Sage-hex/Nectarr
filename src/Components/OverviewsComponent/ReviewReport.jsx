import React from 'react';
import './ReviewReport.css';

const reviews = [
    { product: 'Raw', beekeeper: 'Joe Adhaka', date: '6/8/2024', status: 'Not Yet' },
    { product: 'Manuka', beekeeper: 'Mary Johnson', date: '6/8/2024', status: 'Reviewed' },
];

const ReviewReport = () => {
    return (
        <div className="review-report">
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <p>{review.product}</p>
          <p>Beekeeper: {review.beekeeper}</p>
          <p>Date: {review.date}</p>
          <p>Status: <span className={`status ${review.status.toLowerCase().replace(' ', '-')}`}>{review.status}</span></p>
        </div>
      ))}
    </div>
    );
};

export default ReviewReport;