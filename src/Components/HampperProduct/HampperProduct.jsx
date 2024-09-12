import React from 'react';
import './HampperProduct.css';

const HampperProduct = ({ product }) => {
    console.log('Product in HampperProduct:', product); // Debug line to check if product is passed correctly
    if (!product) return <div>Product not available</div>; // Display a message if product is not available

    return (
        <main className='hampper-product-card'>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className='hampper-details'>
        <p>{product.name}</p>
        <p>#{product.price}</p>
      </div>
    </main>
    );
}

export default HampperProduct;