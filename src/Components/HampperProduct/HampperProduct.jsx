// import React from 'react';
// import './HampperProduct.css';

// const HampperProduct = ({ product }) => {
//     console.log('Product in HampperProduct:', product); // Debug line to check if product is passed correctly
//     if (!product) return <div>Product not available</div>; // Display a message if product is not available

//     return (
//         <main className='hampper-product-card'>
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//       </div>
//       <div className='hampper-details'>
//         <p>{product.name}</p>
//         <p>#{product.price}</p>
//       </div>
//     </main>
//     );
// }

// export default HampperProduct;

// import React, { useState } from 'react';
// import HampperProductCard from '../HampperProductCard/HampperProductCard'; // Adjust the path as needed
// import toast, { Toaster } from 'react-hot-toast'


// const HampperProduct = () => {
//     const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
//     const products = JSON.parse(localStorage.getItem('products')) || [];
//     console.log('Products:', products); // Debug line
//     const hampers = products?.filter(product => product.category === 'Hamper');

//     const handleAddToCart = (product) => {
//         const updatedCart = [...cartItems, product];
//         setCartItems(updatedCart);
//         localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//         toast.success(`${product.name} has been added to your cart!`);
//     };

//     return (
//         <div className="hamper-list">
//             {hampers.length > 0 ? (
//                 hampers.map((product, index) => (
//                     <HampperProductCard key={index} product={product} onAddToCart={handleAddToCart} />
//                 ))
//             ) : (
//                 <p>No products posted for this category.</p>
//             )}
//         </div>
//     );
// };

// export default HampperProduct;

import React, { useState, useEffect } from 'react';
import HampperProductCard from '../HampperProductCard/HampperProductCard'; // Adjust the path as needed
import toast, { Toaster } from 'react-hot-toast';

const HampperProduct = () => {
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem('cartItems')) || []);
  const [hampers, setHampers] = useState([]);
  

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || {};
    const products = storedProducts.data || []; // Access the data array inside the stored object

    setHampers(products);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    toast.success(`${product.honeyName} has been added to your cart!`);
  };

  return (
    <div className="hamper-list">
      {hampers.length > 0 ? (
        hampers.map((product) => (
          <HampperProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
        ))
      ) : (
        <p>No products posted for this category.</p>
      )}
      <Toaster /> {/* Include the toaster for notifications */}
    </div>
  );
};

export default HampperProduct;