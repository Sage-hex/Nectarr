import React from 'react';
import './RecentOrders.css';

const orders = [
    { id: '#8000', name: 'Wildflower', image: 'user1.png' },
    { id: '#7500', name: 'Raw', image: 'user2.png' },
    { id: '#5999', name: 'Tupelo', image: 'user3.png' },
];

const RecentOrders = () => {
    return (
        <div className="orders-list">
      {orders.map((order, index) => (
        <div key={index} className="order-card">
          <img src={order.image} alt={`User ${order.id}`} />
          <p>{order.id} {order.name}</p>
        </div>
      ))}
    </div>
    );
};

export default RecentOrders;