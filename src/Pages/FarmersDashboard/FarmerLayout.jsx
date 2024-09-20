// import React, { useState } from 'react';
// import './FarmerLayout.css';
// import { GrLogin } from 'react-icons/gr';
// import Logo from '../../assets/Images/signup-logo.png';
// import UserIcon from '../../assets/Images/user-icon.png';
// import Modal from '../../Components/Modal/Modal';
// import { Outlet } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import mail from '../../assets/mail.png'
// import MessageModal from '../../Components/Modal/MessageModal';

// const FarmerLayout = () => {
//     // const [selectedMonth, setSelectedMonth] = useState('');
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [ismessageModalOpen, setMessageModalOpen] = useState(false);

//     const handleLogoutClick = () => {
//         setModalOpen(true);
//     };

//     const handlemail = () => {
//         setMessageModalOpen(true);
//     };

//     return (
//         <div className="dashboard-container">
//             <div className="sidebar">
//                 <div className="dashboard-logo">
//                     <img src={Logo} className="dashboard-image" alt="Logo" />
//                 </div>
//                 <nav className='nav'>
//                     <ul className='listhold'>

//                         <li><NavLink to="/farmersHome" activeClassName="active">Overview</NavLink></li>
//                         <li><NavLink to="/messagePage" activeClassName="active">Message</NavLink></li>
//                     </ul>
//                     < span className='log-out' onClick={handleLogoutClick}><GrLogin className="login-icon" /> Logout</span>

//                 </nav>
//             </div>
//             <div className="main-content">
//                 <div className="header">
//                     <div className="welcome-message">Welcome, it is a sweet day!</div>
//                     <div className="Picture-hold">

//                         <img src={mail} alt="" width={'50px'}  onClick={handlemail}/>
//                         <div className="profile-picture"><img src={UserIcon} alt="Profile" /></div>

//                     </div>
//                 </div>

//                    <Outlet/>
//                 {/* <UserDashboardUI selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} /> */}
//             </div>
//             {ismessageModalOpen && <MessageModal setMessageModalOpen={setMessageModalOpen}/>}

//             {isModalOpen && <Modal closeModal={() => setModalOpen(false)}/>}
//         </div>
//     );
// };

// export default FarmerLayout;


import React, { useState } from 'react';
import './FarmerLayout.css';
import { GrLogin } from 'react-icons/gr';
import Logo from '../../assets/Images/signup-logo.png';
import UserIcon from '../../assets/Images/user-icon.png';
import Modal from '../../Components/Modal/Modal';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import mail from '../../assets/mail.png';
import MessageModal from '../../Components/Modal/MessageModal';

const FarmerLayout = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [ismessageModalOpen, setMessageModalOpen] = useState(false);
    const [products, setProducts] = useState({ single: [], hamper: [] }); // Store products by category

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        setModalOpen(true);
    };

    const handlemail = () => {
        setMessageModalOpen(true);
    };

    // Function to post product based on category
    const postProduct = (newProduct) => {
        const { category } = newProduct;

        // Update the products list based on category
        setProducts((prevProducts) => ({
            ...prevProducts,
            [category]: [...prevProducts[category], newProduct],
        }));

        // Navigate to the appropriate category page
        navigate(`/${category}Product`);
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="dashboard-logo">
                    <img src={Logo} className="dashboard-image" alt="Logo" />
                </div>
                <nav className='nav'>
                    <ul className='listhold'>
                        <li><NavLink to="/farmersHome" activeClassName="active">Overview</NavLink></li>
                        <li><NavLink to="/messagePage" activeClassName="active">Message</NavLink></li>
                    </ul>
                    <span className='log-out' onClick={handleLogoutClick}><GrLogin className="login-icon" /> Logout</span>
                </nav>
            </div>
            <div className="main-content">
                <div className="header">
                    <div className="welcome-message">Welcome, it is a sweet day!</div>
                    <div className="Picture-hold">
                        <img src={mail} alt="" width={'50px'} onClick={handlemail} />
                        <div className="profile-picture"><img src={UserIcon} alt="Profile" /></div>
                    </div>
                </div>

                <Outlet context={{ postProduct, products }} /> {/* Pass context to children */}
            </div>
            {ismessageModalOpen && <MessageModal setMessageModalOpen={setMessageModalOpen} />}
            {isModalOpen && <Modal closeModal={() => setModalOpen(false)} />}
        </div>
    );
};

export default FarmerLayout;
