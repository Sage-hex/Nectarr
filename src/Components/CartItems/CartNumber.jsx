import { NavLink } from "react-router-dom";
import { useCartStore } from "../../Context/cart-context";
import { MdShoppingCart } from "react-icons/md";

const CartNumber = () => {
  const { cart } = useCartStore();
  return (
    <>
      <div className="cart-quantity">{cart.length}</div>
      <NavLink to="/cart" className="navbar__icon">
        <MdShoppingCart />
      </NavLink>
    </>
  );
};

export default CartNumber;
