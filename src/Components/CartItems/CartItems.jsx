import React, { useEffect, useState } from "react";
import "./CartItems.css";
import { deleteCart, increaseQty, decrementQTY } from "../../Global/slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import useGetCartItems from "../../Hooks/get-cart-items";
import { useCartStore } from "../../Context/cart-context";
const CartItems = () => {
  const { total } = useGetCartItems();
  const {
    setCart: setContextCart,
    decrement,
    increment,
    cart,
    removeItem,
  } = useCartStore();
  useEffect(() => {
    setContextCart(cart);
  }, [cart]);

  return (
    <div className="CartItems">
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
        {cart?.map((e, index) => (
          <div className="main-cart" key={index}>
            <div className="image-box">
              <img
                src={e && e.productPicture ? e.productPicture : "#"}
                alt=""
              />
            </div>
            <div className="Controls">
              <button
                onClick={() => decrement({ id: e.productID, quantity: 1 })}
              >
                -
              </button>
              <button>{e?.quantity}</button>
              <button
                onClick={() => increment({ id: e.productID, quantity: 1 })}
              >
                +
              </button>
            </div>
            <div className="Controls">
              <h1>{e?.price}</h1>
            </div>
            <div className="Controls">
              <button onClick={() => removeItem({ id: e.productID })}>
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
};
export default CartItems;
