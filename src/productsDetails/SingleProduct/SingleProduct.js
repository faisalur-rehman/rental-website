import React from "react";
import Product from "../product";
import Footer from "../../footer/index";
import Head from "../../signUpIN/head";
import ProductExtra from "../productExtra";
import { useParams } from "react-router-dom";
import "../productsDetail.css";

const SingleProduct = (props) => {
  const { id } = useParams();

  return (
    <>
      <Head />
      <Product productId={id} />
      <ProductExtra productId={id} />
      <Footer />
    </>
  );
};

export default SingleProduct;
