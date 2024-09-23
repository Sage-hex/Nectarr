import React from "react";
import { useEffect } from "react";
import "./Hampper.css";
// import HeroTextImage from '../../Components/HeroTextImage/HeroTextImage'
import HampperHero from "../../Components/HampperHero/HampperHero";
import SpecialOffer from "../../Components/SpecialOffer/SpecialOffer";
import HampperProduct from "../../Components/HampperProduct/HampperProduct";
import axios from "axios";
import toast from "react-hot-toast";
const Hampper = () => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://nectarbuzz.onrender.com/api/v1/getall-product`
      );
      if (response.status === 200) {
        const productData = response.data;
        localStorage.setItem("products", JSON.stringify(productData));
      }
    } catch (error) {
      toast.error("Failed to fetch products. Please try again.");
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main className="hampper-container">
      <HampperHero />
      <h1 className="hampper-title">20% off, on 3 Hampers and ABOVE</h1>
      <SpecialOffer />
      <HampperProduct />
    </main>
  );
};
export default Hampper;
