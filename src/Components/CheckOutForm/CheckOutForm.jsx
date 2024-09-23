import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./CheckOutForm.css";
import { useSelector } from "react-redux";
import { useCartStore } from "../../Context/cart-context";

const CheckOutForm = () => {
  const [shipping, setShipping] = useState({
    address: "",
    state: "",
    city: "",
  });
  const { setCart, total, setTotal } = useCartStore();

  const navigate = useNavigate();
  const { buyer } = useSelector((state) => state);

  const initializePayment = async () => {
    const url = "https://api.korapay.com/merchant/api/v1/charges/initialize";
    const secret = "sk_test_XB6mxM25omoAcZdmxAuvTEfpdZM2wDRdbCPShELc"; // Replace with your actual secret key

    const ref = `ref-${Date.now() + Math.floor(Math.random() * 1000)}`;

    const data = {
      amount: Number(total), // Amount in the smallest currency unit, e.g., kobo for NGN
      reference: ref,
      currency: "NGN",
      customer: {
        name: `${buyer.firstName} ${buyer.lastName}`,
        email: buyer.email,
      },
      redirect_url: "https://localhost:5173/#shop", // Replace with your actual redirect URL
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${secret}`,
          "Content-Type": "application/json",
        },
      });
      window.location.href = response.data.data.checkout_url;
    } catch (error) {
      console.error(
        "Error initializing payment:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipping({
      ...shipping,
      [name]: value,
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (
      shipping.address === "" ||
      shipping.state === "" ||
      shipping.city === ""
    ) {
      return toast.error("Please fill all fields");
    }

    const currentAddress = `${shipping.address}, ${shipping.city}, ${shipping.state}`;
    const token = localStorage.getItem("token");
    toast.loading("Creating Order....")
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
        toast.dismiss();
        toast.loading("Redirecting to order...");
        setCart([]);
        setTotal(0);
        initializePayment();
      })
      .catch((err) => {
        toast.error("An error occurred while processing your order.");
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
    </>
  );
};

export default CheckOutForm;
