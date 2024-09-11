// import React, { useState } from 'react';
// import './ProductCard.css';

// const ProductCard = ({ product }) => {
//     const [hovered, setHovered] = useState(false);

//     return (
//         <div
//       className="product-card"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="product-image">
//         <img src={product.image} alt={product.name} />
//       </div>
//       {hovered && (
//         <div className="hover - details">
//           <p>{product.name}</p>
//           <p>{product.weight}</p>
//           <div className='hover-div'>
//           <p>#{product.price}</p>
//           <button className="add-to-cart">Add to cart</button></div>

//         </div>
//       )}
//       <div className="rating">
//         {'★'.repeat(5)}
//       </div>
//     </div>
//     );
// };

// export default ProductCard;

import React, { useState } from 'react';
import './ProductCard.css';
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      {hovered && (
        <div className="hover-details"> {/* Fixed typo */}
          <p>{product.name}</p>
          <p>{product.weight}</p>
          {/*<div className='hover-div'>*/}
            <p>#{product.price}</p>
            <button className="add-to-cart">Add to cart</button>
          {/*</div>*/}
        </div>
      )}
      <div className="rating">
        {'★'.repeat(5)}
      </div>
      <div className='card-cart'>
        <MdOutlineShoppingCart className='card-cart-icon' />
      </div>
    </div>
    );
};

export default ProductCard;