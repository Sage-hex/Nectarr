// import React, { useEffect, useState } from 'react'
// import './CartItems.css'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import toast, {Toaster} from 'react-hot-toast'
// import { useEffect } from 'react'

// const CartItems = () => {

//     const dispatch = useDispatch();
//     const  Cart  = useSelector((state) => state?.cart)
//     const total = useSelector((state)=> state?.total)                
//     // console.log('total:',total);
    
//     const [cart, setCart] = useState([])
//     const token = localStorage.getItem("token")
    
    
    
//     const config = {
//         headers:  {
//             "Authorization" : `Bearer ${token}`
//         }
//     }
    
//     // console.log("head",headers);


//     const getCart = async()=>{
//         const url = "https://nectarbuzz.onrender.com/api/v1/viewcart" 
      
//         try{
//           const response = await axios.get(url,config)
//           console.log(response.data?.data?.items)
//           setCart(response.data?.data?.items)
//           toast.success(data.message)
      
//         }
        
        
//         catch(error){
//           console.log(error)
//         }
//       }


//     useEffect(()=>{
//         getCart()
//     },[])

//     useEffect(()=>{

//     },[])


// const DeleteCart = async(productID)=>{
//     const url = `https://nectarbuzz.onrender.com/api/v1/removecartitem`
//     const data = {productID: productID}

//     try{
//         // const response = await axios.delete(url,data,config)
//         const response = await axios.delete(url,{ data: data, headers:  {
//             "Authorization" : `Bearer ${token}`
//         } })
//         console.log(response)
//     }

//     catch (error){
//         console.log(error);
        
//     }
//     console.log(productID);
    
// }




 
// const increment = async (productID)=>{
//     url = 'https://nectarbuzz.onrender.com/api/v1/increasecartitem'

//     try{
//         const response =await axios.put(url, {productID :`${productID}`, config})
//     }

//     catch (error){
//         console.log(error);
        
//     }
// }


// const decrement = async (productID)=>{
//     const url = 'https://nectarbuzz.onrender.com/api/v1/reducecartitem'
//     try{
//         const response =await axios.put(url, {productID :`${productID}`, config})
//     }

//     catch (error){
//         console.log(error);
        
//     }
// }


//     return (

//         <div className='CartItems'>
//       <div className="CartItems-head">
//         <div className="itemDetail">
//             <h2></h2>
//         </div>
//         <div className="qty">
//             <h2>Quantity</h2>
//         </div>
//         <div className="qty">
//             <h2>items</h2>
//         </div>
//         <div className="qty">
//             <h2>Action</h2>
//         </div>
//       </div>
//       <hr />

      

//       <div className="Cart-body">
//         {
//             cart?.map((e, index)=>(
//                 <div className="main-cart" key={index}>
//                 <div className="image-box">
//                     <img src={e.productPicture} alt="" />


//                 </div>
//                 <div className="Controls">
//                     <button onClick={()=>dispatch(decrementQTY)}>-</button>
//                     <button>{e.QTY}</button>
//                     <button onClick={()=>dispatch(incrementQty)}>+</button>
//                 </div>
    
//                 <div className="Controls">
//                     <h1>{e.price}</h1>
//                 </div>
    
//                 <div className="Controls">
//                     <h3 onClick={()=>DeleteCart(e.productID)}>Remove Item</h3>
//                 </div>
//              </div>
//             ))
//         }
//       </div>
//       <Toaster/>
//     </div>
//     )
// }

// export default CartItems







import React, { useEffect, useState } from 'react';
import './CartItems.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const CartItems = () => {
    const dispatch = useDispatch();
    const Cart = useSelector((state) => state?.cart);
    const total = useSelector((state) => state?.total);

    const [cart, setCart] = useState([]);
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    const getCart = async () => {
        const url = "https://nectarbuzz.onrender.com/api/v1/viewcart";
        try {
            const response = await axios.get(url, config);
            setCart(response.data?.data?.items);
            toast.success('Cart items fetched successfully');
        } catch (error) {
            console.error(error);
            toast.error('Error fetching cart items');
        }
    };

    useEffect(() => {
        getCart();
    }, []);

    const DeleteCart = async (productID) => {
        const url = `https://nectarbuzz.onrender.com/api/v1/removecartitem`;
        const data = { productID: productID };

        try {
            await axios.delete(url, { data, headers: config.headers });
            setCart(prevCart => prevCart.filter(item => item.productID !== productID));
            toast.success('Item removed from cart');
        } catch (error) {
            console.error(error);
            toast.error('Error removing item from cart');
        }
    };

    const increment = async (productID) => {
        const url = 'https://nectarbuzz.onrender.com/api/v1/increasecartitem';
        try {
            await axios.put(url, { productID: productID }, config);
            // Optionally refresh cart or update state here
        } catch (error) {
            console.error(error);
        }
    };

    const decrement = async (productID) => {
        const url = 'https://nectarbuzz.onrender.com/api/v1/reducecartitem';
        try {
            await axios.put(url, { productID: productID }, config);
            // Optionally refresh cart or update state here
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='CartItems'>
            <div className="CartItems-head">
                <div className="itemDetail"><h2>Item</h2></div>
                <div className="qty"><h2>Quantity</h2></div>
                <div className="qty"><h2>Price</h2></div>
                <div className="qty"><h2>Action</h2></div>
            </div>
            <hr />
            <div className="Cart-body">
                {cart?.map((e, index) => (
                    <div className="main-cart" key={index}>
                        <div className="image-box">
                            <img src={e.productPicture} alt="" />
                        </div>
                        <div className="Controls">
                            <button onClick={() => dispatch(decrement(e.productID))}>-</button>
                            <button>{e.QTY}</button>
                            <button onClick={() => dispatch(increment(e.productID))}>+</button>
                        </div>
                        <div className="Controls">
                            <h1>{e.price}</h1>
                        </div>
                        <div className="Controls">
                            <h3 onClick={() => DeleteCart(e.productID)}>Remove Item</h3>
                        </div>
                    </div>
                ))}
            </div>
            <Toaster />
        </div>
    );
};

export default CartItems;
