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

import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import KorapayModal from '../../Components/Modal/KorapayModal'
import './CheckOutForm.css'

const CheckOutForm = () => {
  const [shipping, setShipping] = useState({
    address: "",
    state: "",
    city: "",
  });
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  // Korapay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://korahq.com/js/korapay-inline.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipping({
      ...shipping,
      [name]: value,
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (shipping.address === "" || shipping.state === "" || shipping.city === "") {
      return toast.error("Please fill all fields");
    }

    const currentAddress = `${shipping.address}, ${shipping.city}, ${shipping.state}`;
    const token = localStorage.getItem("token");

    axios({
      method: "POST",
      url: "https://nectarbuzz.onrender.com/api/v1/checkout",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        currentAddress,
      },
    })
      .then((res) => {
        if (res.data.status === "success") {
          toast.success("Order Placed Successfully");
          setShowModal(true); // Show the payment modal after checkout success
        } else {
          toast.error("An error occurred, please try again");
        }
      })
      .catch((err) => {
        toast.error("An error occurred while processing your order.");
      });
  };

  const payKorapay = () => {
    window.Korapay.initialize({
      key: "pk_juigfweofyfewby732gwo8923e",
      reference: `ref-${Date.now()}`, 
      amount: 3000, 
      currency: "NGN",
      customer: {
        name: "John Doe",
        email: "john@doe.com",
      },
      onClose: function () {
        toast.info("Payment process closed.");
      },
      onSuccess: function (data) {
        toast.success("Payment successful!");
        setShowModal(false); // Close the modal after success
        navigate("/shop");
      },
      onFailed: function (data) {
        toast.error("Payment failed. Please try again.");
      },
    });
  };

  return (
    <>
      <form className="CheckOutForm">
        <h2>Shipping Address</h2>
        <div className="checkoutInfo">
          <input
            type="text"
            placeholder="Address"
            required
            name="address"
            onChange={handleChange}
          />
        </div>
        <div className="checkoutInfo">
          <div className="check-group-Input">
            <input
              type="text"
              placeholder="State"
              name="state"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="payment">
          <span onClick={() => navigate("/shop")} className="span-hold">
            <IoArrowBack />
            <span>Return to Cart</span>
          </span>
          <h2>Payment</h2>
          <span>All Transactions are Secured and Encrypted</span>
        </div>
        <button onClick={handleCheckout} className="checkOutBtn" type="submit">
          CHECK OUT PAYMENT
        </button>
      </form>

      {/* Modal Popup for Payment */}
      <KorapayModal show={showModal} handleClose={() => setShowModal(false)}>
        <h2>Complete Your Payment</h2>
        <p>Click the button below to proceed with the payment.</p>
        <button onClick={payKorapay}>Confirm Payment with Korapay</button>
      </KorapayModal>
    </>
  );
};

export default CheckOutForm;
