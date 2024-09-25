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
import React, { useState } from "react";
import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useCartStore } from "../../Context/cart-context";

const ProductCard = ({ product, products }) => {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const { setCart, cart, addItem } = useCartStore();
  const token = localStorage.getItem("token");
  const HandleCart = async (productID, quantity) => {
    const url = `https://nectarbuzz.onrender.com/api/v1/addtocart`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.post(url, { productID, quantity }, config);
      console.log(response);
      const singleProduct = products.find((item) => item.id == product.id);
      addItem({
        productID: singleProduct.id,
        honeyName: singleProduct.name,
        quantity: 1,
        price: singleProduct.price,
        productPicture: singleProduct.productPicture,
      });
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.success(error.response.data.message);
    }
  };
  return (
    <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="product-image">
        <img src={product.productPicture} alt={product.name} />
      </div>
      {hovered && (
        <div className="hover-details">
          <p>{product.name}</p>
          <p>₦ {Number(product.price).toLocaleString()}</p>
          <button
            className="add-to-cart"
            onClick={() => HandleCart(product.id, 1)}
          >
            Add to cart
          </button>
        </div>
        
      )}
      <div className="rating">{"★".repeat(5)}</div>
      <div className="card-cart">
        <MdOutlineShoppingCart className="card-cart-icon" />
      </div>
      <Toaster/>
    </div>
  );
};
export default ProductCard;
