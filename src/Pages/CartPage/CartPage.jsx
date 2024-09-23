import React from "react";
import "./CartPage.css";
import { MdArrowForwardIos } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import CartItems from "../../Components/CartItems/CartItems";
import Order from "../../Components/OrderSummary/Order";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const CartPage = () => {
  const nav = useNavigate()
  return (
    <div className="CartPage">
      <div className="top">
        <div className="Home">
          <p>Home</p>
          <MdArrowForwardIos />
          <span>Shopping</span>
        </div>
        <h1>Shopping Cart</h1>
      </div>

      <div className="Cart-Wrap">
        <div className="Wrap-top">
          <Button onClick={()=>nav('/shop')}>
          
            <IoArrowBack /> Continue Shopping
          </Button>
          {/* <Button onClick={()=>nav('/shop')}>shop now</Button> */}
        </div>

        <div className="CartItems-Wrap">
          <CartItems />
          <Order />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
