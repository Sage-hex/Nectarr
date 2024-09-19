import React from 'react'
import "./CheckOutForm.css"
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
    const nav = useNavigate()
  return (
    <form className='CheckOutForm'>
      <div className="checkoutInfo">
        <h2>Information</h2>
        <input type="email"  placeholder='Email' required/>
      </div>

      <div className="checkoutInfo">
         <h2>Shipping Addres</h2>
         <div className="check-group-Input">
             <input type="text"  placeholder='First Name'/>
             <input type="text"  placeholder='Last Name'/>
         </div>
      </div>

      <div className="checkoutInfo">
        <input type="text"  placeholder='Address' required/>
      </div>

      <div className="checkoutInfo">
         <div className="check-group-Input">
             <input type="text"  placeholder='State'/>
             <input type="text"  placeholder='City'/>
         </div>
      </div>

      <div className="checkoutInfo">
        <input type="number"  placeholder='phone' required/>
      </div>

      <div className="payment">
        
       <span onClick={()=>nav('/shop')} className='span-hold'> <IoArrowBack/><span>Return to Cart</span></span>
       <h2>Payment</h2>
        <span>All Transaction are Secured and Encrypted</span>
      </div>
       

      <div className="checkoutInfo">
        <input type="text"  placeholder='Card Number' required/>
      </div>

      <div className="checkoutInfo">
         <div className="check-group-Input">
             <input type="date"  placeholder='Date' />
             <input type="text"  placeholder='Voucher code if any'/>
         </div>
      </div>
      
        <button>CHECK OUT PAYMENT</button>
      
      
    </form>
  )
}

export default CheckOutForm
