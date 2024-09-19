import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
// import './ProductList.css';

const ProductList = () => {
    const products = [{
            id: 1,
            name: 'sadfghj+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {   id: 2,
            name: 'eweretyuhj',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {   id: 3,
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {   id: 4,
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {   id: 5,
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {   id: 6,
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {   id: 7,
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {   id: 8,
            name: 'PRI Manuka MGO 200+',
            weight: '400g',
            price: 6900,
            image: 'https://via.placeholder.com/150',
        },
        {   id: 9,
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