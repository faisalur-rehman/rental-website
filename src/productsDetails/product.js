import React, { useEffect } from "react";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";
import { useParams } from "react-router-dom";

const Product = () => {
  const singleProduct = useApi(rentalApi.getSingleProduct);
  const { id } = useParams();
  // console.log(("id", id));
  useEffect(() => {
    async function fetchProduct() {
      await singleProduct.request(id);
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  // console.log("single", singleProduct.data);

  return (
    <>
      <section id="produt-detail">
        <div class="container">
          {singleProduct.data && (
            <div class="main">
              <figure>
                <img
                  src={`https://multivendor-ecommerce-restapi.herokuapp.com/${singleProduct.data.product.image}`}
                  alt=""
                />
              </figure>

              <div class="detail">
                <strong>{singleProduct.data.product.companyName}</strong>

                <div class="price-box">
                  <div class="price">
                    <small>rent from</small>
                    <p>${singleProduct.data.product.pricePerDay}/day</p>
                  </div>
                </div>
                <p>{singleProduct.data.product.description}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
