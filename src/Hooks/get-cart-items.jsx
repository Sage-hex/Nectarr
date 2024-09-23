import axios from "axios";
import { useEffect, useState } from "react";
import { useCartStore } from "../Context/cart-context";

const useGetCartItems = () => {
  const token = localStorage.getItem("token");
  const { setTotal, total, setCart } = useCartStore();
  useEffect(() => {
    const getCartItems = async () => {
      const response = await axios.get(
        "http://localhost:8888/api/v1/viewcart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data.data;
      console.log("Items Get Cart Context:", data.items);
      setCart(data.items);
      setTotal(data.totalPrice);
    };
    getCartItems()
      .then()
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return { total };
};
export default useGetCartItems;
