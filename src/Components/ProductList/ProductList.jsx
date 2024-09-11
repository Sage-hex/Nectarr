import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
// import './ProductList.css';

const ProductList = () => {
    const products = [{
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
    );
};

export default ProductList;