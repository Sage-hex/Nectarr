
import React from 'react';
import './HampperProductCard.css'; // Ensure this path is correct

const HampperProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="hampper-product-card">
            <img src={product.productPicture} alt={product.name} className="hampper-product-image" />
            <div className="hampper-product-title">{product.honeyName}</div>
            <div className="hampper-product-pricing">Price: ₦{product.price}</div>
            <div className="hampper-product-quantity">Quantity: {product.quantity}</div>
            <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default HampperProductCard;

