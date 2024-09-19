import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
} from 'chart.js';
import './SalesOverview.css';

// Register the components used by Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const SalesOverview = () => {
    // Doughnut Chart Data
    const pieData = {
        labels: ['Online', 'Offline'],
        datasets: [{
            data: [65, 35],
            backgroundColor: ['#4CAF50', '#FF9800'],
            hoverBackgroundColor: ['#45a049', '#ffa726'],
        }, ],
    };

    // Bar Chart Data
    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Sales',
            backgroundColor: '#FFD700',
            hoverBackgroundColor: '#FFC107',
            borderColor: '#FFD700',
            data: [20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 90000, 80000, 75000],
        }, ],
    };

    // Chart options for interaction (tooltips, animations)
    const pieOptions = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
                },
            },
            legend: {
                display: true,
                position: 'bottom',
            },
        },
        hover: {
            animationDuration: 400,
        },
        animation: {
            animateScale: true,
        },
    };

    const barOptions = {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (tooltipItem) => `Sales: $${tooltipItem.raw.toLocaleString()}`,
                },
            },
            legend: {
                display: false,
            },
        },
        hover: {
            animationDuration: 400,
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutBounce',
        },
    };

    return (
        <div className="sales-overview">
      <div className="chart-card">
        <Doughnut data={pieData} options={pieOptions} />
        <p>Total Sales: $300,000</p>
      </div>
      <div className="top-seller-card">
        <img src="tupello.png" alt="Top Seller" />
        <p>Top Seller: Tupelo - 65% Online, 35% Offline</p>
      </div>
      <div className="chart-card">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
    );
};

export default SalesOverview;