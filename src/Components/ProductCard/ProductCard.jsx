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
import { useDispatch } from 'react-redux';
import { MdOutlineShoppingCart } from "react-icons/md";
import axios from 'axios';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
    const [hovered, setHovered] = useState(false);
    const token= localStorage.getItem("token")
    console.log(token);
    

    // const addToCart = async(id)=>{
    //   await axios.post ('https://nectarbuzz.onrender.com/api/v1/')
    // }

// const getCart = async ()=>{
//     try {
//         // const response = await axios.get(${url}/viewcart, {
//         //     headers:{
//         //       "Authorization": Bearer ${token} 
//         //     }
//         //   })
//         console.log(response.data.data.data.items)
//         setCartItems(response.data.data.data.items)
//     }catch (error) {
            
//     }
// }

// const IncreaseItem = async(productId,quantity)=>{
//     try {
//         const response =await axios.post (${url}/item-increase,
//              {productId,quantity},
//              {
//                 headers:{
//                   "Authorization": Bearer ${token} 
//                 }
//               }
//             )
//             setReload((prev) => !prev);
        
//     } catch (error) {
        
//     }
// }

// const DecreaseItem = async (productId, quantity)=>{
//     try {
//         const response = await axios.post(${url}/item-decrease, 
//         {productId,quantity},
//         {
//                 headers:{
//                   "Authorization": Bearer ${token} 
//                 }
//               }
//             )
//             setReload((prev) => !prev);
//     } catch (error) {
        
//     }
// }


const url= 'https://nectarbuzz.onrender.com/api/v1/addtocart'



const config = {
  headers:{
    "Authorization" : `Bearer ${token}`
  }
}

const HandleCart = async(productID, quantity)=>{

  try{
    const response = await  axios.post(url, {productID,quantity}, config)
    console.log(response.data);
    
  }
  
  catch(error){
    console.log(error);
    
  }
  
}






console.log(product)

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
        <div className="hover-details"> {/* Fixed typo */}
          <p>{product.honeyName}</p>
          <p>{product.price}</p>
          {/*<div className='hover-div'>*/}
            <p>#{product.price}</p>
            <button className="add-to-cart" onClick={()=>HandleCart(product._id, 1)}>Add to cart</button>
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