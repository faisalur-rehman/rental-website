import React, { useEffect } from "react";
import Product from "../product";
import Footer from "../../footer/index";
import Head from "../../signUpIN/head";
import ProductExtra from "../productExtra";
import { useParams } from "react-router-dom";
import "../productsDetail.css";
import useApi from "../../hooks/useApi";
import * as rentalApi from "../../apis/schedule";

const SingleProduct = () => {
  const { id } = useParams();
  const singleProduct = useApi(rentalApi.getSingleProduct);
  console.log(("id", id));
  useEffect(() => {
    async function fetchProduct() {
      await singleProduct.request(id);
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  console.log("a user", singleProduct.data);

  return (
    <>
      <Head />
      <Product productId={id} />
      {singleProduct.data && (
        <ProductExtra
          userId={singleProduct.data.product.userId}
          productId={id}
        />
      )}
      <Footer />
    </>
  );
};

export default SingleProduct;
