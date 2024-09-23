import React, { useState, useEffect } from "react";
import HampperProductCard from "../HampperProductCard/HampperProductCard"; // Adjust the path as needed
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useCartStore } from "../../Context/cart-context";

const HampperProduct = () => {
  const [hampers, setHampers] = useState([]);
  const { setCart, cart, addItem } = useCartStore();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://nectarbuzz.onrender.com/api/v1/getall-product`,
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        setHampers(() =>
          response.data.data.map((product) => ({
            id: product._id,
            name: product.honeyName,
            status: product.productStatus,
            productPicture: product.productPicture,
            quantity: product.quantity,
            price: product.price,
            farmers: product.farmers,
          }))
        );
      }
    });
  }, []);

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token");
    axios({
      method: "post",
      url: `https://nectarbuzz.onrender.com/api/v1/addtocart`,
      data: {
        productID: product.id,
        quantity: 1,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        const singleProduct = hampers.find((item) => item.id == product.id);
        addItem({
          productID: singleProduct.id,
          honeyName: singleProduct.name,
          quantity: 1,
          price: singleProduct.price,
          productPicture: singleProduct.productPicture,
        });
        toast.success(`${product.name} has been added to your cart!`);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to add product to cart. Please try again.");
      });
  };

  return (
    <div className="hamper-list">
      {hampers.length > 0 ? (
        hampers.map((product) => (
          <HampperProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))
      ) : (
        <p>No products posted for this category.</p>
      )}
      <Toaster /> {/* Include the toaster for notifications */}
    </div>
  );
};

export default HampperProduct;
