import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import './SpecialOffer2.css';

const SpecialOffer = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/250',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/350',
    ];

    const changeImage = () => {
        setImageIndex((imageIndex + 1) % images.length);
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Change the hero text every 3 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // This Cleans up the interval each time the component unmounts
    }, [images.length]);

    return (
        <section className="special-offer-container">
            <div className="offer-left">
                <h2>Seasonal Offers</h2>
                <p>
                    Our latest offers, seasonal savings <br /> & multi-buy discounts.
                </p>
                <NavLink to="/hampers">
                    <Button>Hampers</Button>
                </NavLink>
            </div>
            
            <div className="offer-image">
                {/* <img src={images[imageIndex]} alt="Product" onClick={changeImage} /> */}
                <img src={images[currentIndex]} alt="Product" onClick={changeImage} />
            </div>
            
            <div className="offer-right">
                <h1>Double-Delighty</h1>
                <p>
                    Jumbo <span>season</span>
                </p>
                <h4>Coming soon!</h4>
                <NavLink to="/newsletter">
                    <Button>Subscribe and Save 20%</Button>
                </NavLink>
            </div>
        </section>
    );
};

export default SpecialOffer;


// import React, { useState } from 'react';
// import './SpecialOffer2.css';

// const SpecialOffer = () => {
//     const [imageIndex, setImageIndex] = useState(0);
//     const images = [
//         'https://via.placeholder.com/150',
//         'https://via.placeholder.com/200',
//         'https://via.placeholder.com/250',
//         'https://via.placeholder.com/300',
//         'https://via.placeholder.com/350',
//     ];

//     const changeImage = () => {
//         setImageIndex((imageIndex + 1) % images.length);
//     };

//     return (
//         <section className="special-offer-container">
//             <div className="offer-content">
//                 <div className="offer-text">
//                     <h2>Double Delighty</h2>
//                     <p>Jumbo Season</p>
//                 </div>
//                 <div className="offer-image">
//                     <img src={images[imageIndex]} alt="Product" />
//                 </div>
//                 <div className="offer-footer">
//                     <h4>Coming soon!</h4>
//                     <button onClick={changeImage}>Subscribe and Save 20%</button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SpecialOffer;