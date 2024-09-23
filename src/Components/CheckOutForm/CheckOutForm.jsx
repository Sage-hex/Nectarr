// import React from 'react'
// import "./CheckOutForm.css"
// import { IoArrowBack } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';

// const CheckOutForm = () => {
//     const nav = useNavigate()
//   return (
//     <form className='CheckOutForm'>
//       <div className="checkoutInfo">
//         <h2>Information</h2>
//         <input type="email"  placeholder='Email' required/>
//       </div>

//       <div className="checkoutInfo">
//          <h2>Shipping Addres</h2>
//          <div className="check-group-Input">
//              <input type="text"  placeholder='First Name'/>
//              <input type="text"  placeholder='Last Name'/>
//          </div>
//       </div>

//       <div className="checkoutInfo">
//         <input type="text"  placeholder='Address' required/>
//       </div>

//       <div className="checkoutInfo">
//          <div className="check-group-Input">
//              <input type="text"  placeholder='State'/>
//              <input type="text"  placeholder='City'/>
//          </div>
//       </div>

//       <div className="checkoutInfo">
//         <input type="number"  placeholder='phone' required/>
//       </div>

//       <div className="payment">
        
//        <span onClick={()=>nav('/shop')} className='span-hold'> <IoArrowBack/><span>Return to Cart</span></span>
//        <h2>Payment</h2>
//         <span>All Transaction are Secured and Encrypted</span>
//       </div>
       

//       <div className="checkoutInfo">
//         <input type="text"  placeholder='Card Number' required/>
//       </div>

//       <div className="checkoutInfo">
//          <div className="check-group-Input">
//              <input type="date"  placeholder='Date' />
//              <input type="text"  placeholder='Voucher code if any'/>
//          </div>
//       </div>
      
//         <button>CHECK OUT PAYMENT</button>
      
      
//     </form>
//   )
// }

// export default CheckOutForm

import React, { useState } from 'react';
import "./CheckOutForm.css";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [voucher, setVoucher] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const nav = useNavigate();

  const token = localStorage.getItem('jwtToken'); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://nectarbuzz.onrender.com/api/v1/checkout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({
          currentAddress: address,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful checkout
        alert("Checkout successful!");
        nav('/thankyou'); // Redirect after successful checkout
      } else {
        // Handle error
        alert(`Checkout failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("An error occurred during checkout.");
    }
  };

  return (
    <form className='CheckOutForm' onSubmit={handleSubmit}>
      <div className="checkoutInfo">
        <h2>Information</h2>
        <input 
          type="email" 
          placeholder='Email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>

      <div className="checkoutInfo">
        <h2>Shipping Address</h2>
        <div className="check-group-Input">
          <input 
            type="text" 
            placeholder='First Name' 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder='Last Name' 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </div>
      </div>

      <div className="checkoutInfo">
        <input 
          type="text" 
          placeholder='Address' 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          required 
        />
      </div>

      <div className="checkoutInfo">
        <div className="check-group-Input">
          <input 
            type="text" 
            placeholder='State' 
            value={state} 
            onChange={(e) => setState(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder='City' 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
          />
        </div>
      </div>

      <div className="checkoutInfo">
        <input 
          type="number" 
          placeholder='Phone' 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
      </div>

      <div className="payment">
        <span onClick={() => nav('/shop')} className='span-hold'>
          <IoArrowBack/><span>Return to Cart</span>
        </span>
        <h2>Payment</h2>
        <span>All Transactions are Secured and Encrypted</span>
      </div>

      <div className="checkoutInfo">
        <input 
          type="text" 
          placeholder='Card Number' 
          value={cardNumber} 
          onChange={(e) => setCardNumber(e.target.value)} 
          required 
        />
      </div>

      <div className="checkoutInfo">
        <div className="check-group-Input">
          <input 
            type="date" 
            placeholder='Expiry Date' 
            value={expiryDate} 
            onChange={(e) => setExpiryDate(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder='Voucher code if any' 
            value={voucher} 
            onChange={(e) => setVoucher(e.target.value)} 
          />
        </div>
      </div>

      <button type="submit">CHECK OUT PAYMENT</button>
    </form>
  );
};

export default CheckOutForm;
