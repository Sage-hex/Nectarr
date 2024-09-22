import React, { useEffect, useState } from 'react'
import './CartItems.css'
import { deleteCart, incrementQty, decrementQTY } from '../../Global/slice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import toast, {Toaster} from 'react-hot-toast'

const CartItems = () => {

    // const dispatch = useDispatch();
    // const  cart  = useSelector((state) => state?.cart)
    // const total = useSelector((state)=> state?.total)
    const [cart, setCart] = useState([])
    const token = localStorage.getItem("token")
    
    
    
    const config = {
        headers:  {
            "Authorization" : `Bearer ${token}`
        }
    }
    
    
    console.log("t",token);
    // console.log("head",headers);


    const getCart = async()=>{
        const url = "https://nectarbuzz.onrender.com/api/v1/viewcart" 
      
        try{
      
          const response = await axios.get(url,config)
          const data = response.data?.data?.items;
          setCart(data)
          localStorage.setItem('cartItems', JSON.stringify(data))
        //   toast.success(data.message)
        // toast.sucecess
      
        }
        
        
        catch(error){
          console.log(error)
        }
      }


    useEffect(()=>{
        getCart()
    },[])

//     const RemoveItem = async (productId)=>{
//     try {
//         const response = await axios.delete(${url}/removeItem,
//             { productId},
          
//            {
//             headers:{
//               "Authorization": Bearer ${token} 
//             }
//         }
//         )
//         setReload((prev) => !prev);
//     } catch(error) {
//         console.log(error)
//     }
// }

// useEffect(()=>{
//     getCart()
// },[reload])
const url = 'https://nectarbuzz.onrender.com/api/v1/removecartitem'

const DeleteCart = async(productID)=>{
    try{
        const response = await axios.delete(url,{productID: `${productID}`},config)
    }

    catch (error){
        console.log(error);
        
    }
    console.log(productID);
    
}
 
const increment = async (productID) => {
    const url = 'https://nectarbuzz.onrender.com/api/v1/increasecartitem';
    try {
      await axios.put(url, { productID }, config);
      setReload((prev) => !prev);
    } catch (error) {
      console.error('Error incrementing quantity:', error);
      toast.error('Failed to increment quantity');
    }
  };

  const decrement = async (productID) => {
    const url = 'https://nectarbuzz.onrender.com/api/v1/reducecartitem';
    try {
      await axios.put(url, { productID }, config);
      setReload((prev) => !prev);
    } catch (error) {
      console.error('Error decrementing quantity:', error);
      toast.error('Failed to decrement quantity');
    }
  };


    return (

        <div className='CartItems'>
      <div className="CartItems-head">
        <div className="itemDetail">
            <h2></h2>
        </div>
        <div className="qty">
            <h2>Quantity</h2>
        </div>
        <div className="qty">
            <h2>items</h2>
        </div>
        <div className="qty">
            <h2>Action</h2>
        </div>
      </div>
      <hr />

      

      <div className="Cart-body">
        {
            cart?.map((e, index)=>(
                <div className="main-cart" key={index}>
                <div className="image-box">
                    <img src={e.productPicture} alt="" />


                </div>
                <div className="Controls">
                    <button onClick={() => decrement(e.productID)}>-</button>
                    <button>{e.quantity}</button>
                    <button onClick={() => increment(e.productID)}>+</button>
                </div>
    
                <div className="Controls">
                    <h1>{e.price}</h1>
                </div>
    
                <div className="Controls">
                    <h3 onClick={()=>DeleteCart(e.productID)}>Remove Item</h3>
                </div>
             </div>
            ))
        }
      </div>
      <Toaster/>
    </div>
    )
}

export default CartItems











// import React, { useEffect, useState } from 'react';
// import './CartItems.css';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// const CartItems = () => {
//   const [cart, setCart] = useState([]);
//   const [reload, setReload] = useState(false);
// //   const token = localStorage.getItem('token');

//   const config = {
//     headers: {
//       Authorization: Bearer ${token},
//     },
//   };

//   const getCart = async () => {
//     const url = 'https://nectarbuzz.onrender.com/api/v1/viewcart';

//     try {
//       const response = await axios.get(url, config);
//       setCart(response.data?.data?.items || []);
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//       toast.error('Failed to load cart items');
//     }
//   };

//   useEffect(() => {
//     getCart();
//   }, [reload]);

//   const deleteCart = async (productID) => {
//     const url = https://nectarbuzz.onrender.com/api/v1/removecartitem/${productID};
//     try {
//       await axios.delete(url, config);
//       toast.success('Item removed from cart');
//       setReload((prev) => !prev);
//     } catch (error) {
//       console.error('Error deleting item:', error);
//       toast.error('Failed to remove item');
//     }
//   };

//   const increment = async (productID) => {
//     const url = 'https://nectarbuzz.onrender.com/api/v1/increasecartitem';
//     try {
//       await axios.put(url, { productID }, config);
//       setReload((prev) => !prev);
//     } catch (error) {
//       console.error('Error incrementing quantity:', error);
//       toast.error('Failed to increment quantity');
//     }
//   };

//   const decrement = async (productID) => {
//     const url = 'https://nectarbuzz.onrender.com/api/v1/reducecartitem';
//     try {
//       await axios.put(url, { productID }, config);
//       setReload((prev) => !prev);
//     } catch (error) {
//       console.error('Error decrementing quantity:', error);
//       toast.error('Failed to decrement quantity');
//     }
//   };

//   return (
//     <div className="CartItems">
//       <div className="CartItems-head">
//         <div className="itemDetail">
//           <h2></h2>
//         </div>
//         <div className="qty">
//           <h2>Quantity</h2>
//         </div>
//         <div className="qty">
//           <h2>Items</h2>
//         </div>
//         <div className="qty">
//           <h2>Action</h2>
//         </div>
//       </div>
//       <hr />

//       <div className="Cart-body">
//         {cart?.map((e, index) => (
//           <div className="main-cart" key={index}>
//             <div className="image-box">
//               <img src={e.productPicture} alt="" />
//             </div>
//             <div className="Controls">
//               <button onClick={() => decrement(e.productID)}>-</button>
//               <button>{e.quantity}</button>
//               <button onClick={() => increment(e.productID)}>+</button>
//             </div>
//             <div className="Controls">
//               <h1>{e.price}</h1>
//             </div>
//             <div className="Controls">
//               <h3 onClick={() => deleteCart(e.productID)}>Remove Item</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Toaster />
//     </div>
//   );
// };

// export default CartItems;