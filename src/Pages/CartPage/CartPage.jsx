import React from 'react'
import './CartPage.css'
import { MdArrowForwardIos } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import CartItems from '../../Components/CartItems/CartItems';
import Order from '../../Components/OrderSummary/Order';

const CartPage = () => {
    return (
        <div className='CartPage'>
     <div className="top">
      <div className='Home'>
       <p>Home</p>
       <MdArrowForwardIos />
       <span>Shopping</span>
      </div>
      <h1>Shopping Cart</h1>
     </div>

     <div className="Cart-Wrap">
       <div className="Wrap-top">
        <button> <IoArrowBack /> Continue Shopping</button>
       </div>

       <div className="CartItems-Wrap">
         <CartItems/>
         <Order/>
        </div>

     </div>

     
    </div>
    )
}

export default CartPage