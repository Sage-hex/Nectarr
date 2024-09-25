import React from "react";
import "./CheckoutItems.css";
import { useCartStore } from "../../Context/cart-context";

const CheckoutItems = () => {
  // const List = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]
  const { cart, total } = useCartStore();
  return (
    <div className="CheckoutItems">
      <div className="CheckoutItems-wrap">
        <h2>PURCHASED PRODUCTS</h2>
        <div className="CheckoutItems-top">
          {cart.map((item, index) => (
            <div className="checkout-product"
            key={index}
            >
              <h3>
                {item.honeyName}
              </h3>
              <h3>₦{Number(item.price).toLocaleString()}</h3>
            </div>
          ))}
        </div>

        <div className="CheckoutItems-bottom">
          {/*<button>Use Bonus Point</button>*/}

          <div className="checkout-total">
            <div className="total-cost">
              <h3>subtotal</h3>
              <h2>₦ {Number(total).toLocaleString()}</h2>
            </div>

            <div className="total-cost">
              <h3>Shipping:</h3>
              <h2>₦ 13,00</h2>
            </div>

            <div className="total-cost">
              <h2>Total:</h2>
              <h2>₦ {Number(total).toLocaleString()}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
