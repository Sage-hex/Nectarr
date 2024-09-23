import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const incrementCart = async ({ id, quantity, set }) => {
  const url = "https://nectarbuzz.onrender.com/api/v1/increasecartitem";
  const token = localStorage.getItem("token");
  axios({
    url,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: { productID: id, quantity: Number(quantity) },
  }).then((res) => {
    set((state) => {
      const cart = state.cart.map((item) => {
        if (item.productID === id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else {
          return item;
        }
      });
      return { ...state, cart, total: res.data.data.totalPrice };
    });
  });
};
const decrementCart = async ({ id, quantity, set }) => {
  const url = "https://nectarbuzz.onrender.com/api/v1/reducecartitem";
  const token = localStorage.getItem("token");
  axios({
    url,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: { productID: id, quantity: Number(quantity) },
  }).then((res) => {
    set((state) => {
      const cart = state.cart.map((item) => {
        if (item.productID === id) {
          if (item.quantity - quantity <= 0) {
            return item;
          } else {
            return {
              ...item,
              quantity: item.quantity - quantity,
            };
          }
        } else {
          return item;
        }
      });
      return { ...state, cart, total: res.data.data.totalPrice };
    });
  });
};
const removeItemCart = async ({ id, set }) => {
  const url = "https://nectarbuzz.onrender.com/api/v1/removecartitem";
  const token = localStorage.getItem("token");
  axios({
    url,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: { productID: id },
  }).then((res) => {
    set((state) => {
      const cart = state.cart.filter((item) => item.productID !== id);
      return { ...state, cart, total: res.data.data.totalPrice };
    });
  });
};
export const useCartStore = create(
  persist((set) => ({
    cart: [],
    total: 0,
    setCart: (cart) => set({ cart }),
    setTotal: (total) => set({ total }),
    addItem: (item) =>
      set((state) => {
        const existingItem = state.cart.find(
          (cartItem) => cartItem.productID === item.productID
        );
        // Update quantity if item exists in cart
        if (existingItem) {
          return {
            cart: state.cart.map((cartItem) =>
              cartItem.productID === item.productID
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            ),
          };
        }
        // Add new item to cart
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }),
    increment: ({ id, quantity }) => incrementCart({ id, quantity, set }),
    decrement: ({ id, quantity }) => decrementCart({ id, quantity, set }),
    removeItem: ({ id }) => removeItemCart({ id, set }),
  })),
  {
    name: "cart-store",
    storage: createJSONStorage(() => localstorage),
  }
);
