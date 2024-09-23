import React from "react";
import "./Shop.css";
import ShopHero from "../../Components/HeroText/HeroText";
import SpecialOffer from "../../Components/SpecialOffer/SpecialOffer";
import ProductList from "../../Components/ProductList/ProductList"; // Import ProductList
// import Button from '../../Components/Button/Button';
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <main className="shop-container">
      <ShopHero />
      <SpecialOffer />
      <section className="shop-items">
        <h1>Manuka Honey</h1>
        <ProductList />
      </section>
      <NewsLetter />
      {/*<section ggclassName="shop-newsletter">
                <h1>Subscribe and win Honey Hampers</h1>
                <form action="" method="get">
                    <div className="input-group">
                    <input type="text" placeholder='Email' required />
                        <Button>Send</Button>
                    </div>
                </form>
            </section>*/}
    </main>
  );
};

export default Shop;
