import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
// import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const url = `https://nectarbuzz.onrender.com/api/v1/getall-product`;

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(() =>
        response.data.data.map((product) => ({
          id: product._id,
          name: product.honeyName,
          status: product.productStatus,
          productPicture: product.productPicture,
          quantity: product.quantity,
          price: product.price,
          farmers: product.farmers,
        }))
      ); // Assuming response.data contains the list of products
      setLoading(false);
    } catch (err) {
      setError(err.message || "Error fetching products");
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading products...</div>;
  return (
    <div
      style={{
        // maxWidth: "1200px",
        marginInline: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
         
      }}
      
      
      className="product-list"
    >
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} products={products}/>
      ))}
    </div>
  );
};

export default ProductList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from '../ProductCard/ProductCard';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await axios.get('https://nectarbuzz.onrender.com/api/v1/getall-product');
//                 console.log('API Response:', response); // Log response to inspect structure
//                 setProducts(response.data.products || []); // Adjust based on actual API structure
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message || 'Error fetching products');
//                 setLoading(false);
//             }
//         };
//         fetchProducts();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     // Ensure products is an array before trying to reduce or map over it
//     if (!Array.isArray(products)) {
//         return <div>No products found.</div>;
//     }

//     // Step 1: Group products by category
//     const groupedProducts = products.reduce((acc, product) => {
//         if (!acc[product.category]) {
//             acc[product.category] = [];
//         }
//         acc[product.category].push(product);
//         return acc;
//     }, {});

//     return (
//         <div className="product-list">
//             {Object.keys(groupedProducts).length > 0 ? (
//                 Object.keys(groupedProducts).map((category, index) => (
//                     <div key={index}>
//                         {/* Render Category Heading */}
//                         <h2>{category}</h2>

//                         {/* Render Products for Each Category */}
//                         <div className="category-products">
//                             {groupedProducts[category].map((product, index) => (
//                                 <ProductCard key={index} product={product} />
//                             ))}
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <div>No products available</div>
//             )}
//         </div>
//     );
// };

// export default ProductList;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProductCard from '../ProductCard/ProductCard';

// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Fetch products when the component mounts
//     const fetchProducts = async () => {
//         try {
//             const response = await axios.get('https://nectarbuzz.onrender.com/api/v1/getall-approved-product');
//             console.log(response)
//             setProducts(response.data); // Assuming response.data contains the list of products

//             setLoading(false);
//         } catch (err) {
//             setError(err.message || 'Error fetching products');
//             setLoading(false);
//         }
//     };

//     useEffect(() => {

//         fetchProducts();
//     }, []);

//     if (loading) return <div>Loading products...</div>;
//     if (error) return <div>Error: {error}</div>;
// console.log(products)
//     return (
//         <div className="product-list">
//             {products.map((product, index) => (
//                 <ProductCard key={index} product={product} />
//             ))}
//             product
//         </div>
//     );
// };

// export default ProductList;
