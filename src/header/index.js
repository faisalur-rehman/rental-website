import React, { useState } from "react";
import "./header.css";
import "../slick.css";
import Header from "./header";
import Banner from "./banner";
import Products from "../products";

const Index = () => {
  const [searchedProducts, setSearchedProducts] = useState([]);
  console.log("searched", searchedProducts);
  return (
    <>
      <div className="mainBanner">
        <Header />
        <Banner setSearchedProducts={setSearchedProducts} />
        <Products searchedProducts={searchedProducts} />
        {/* <a href="#latest-product" class="bottom-arrow"><i class="fas fa-arrow-down"></i></a> */}
      </div>
    </>
  );
};

export default Index;
