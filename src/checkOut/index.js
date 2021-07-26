import React, { useEffect, useState } from "react";
import "./checkOut.css";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";
import AppForm from "../AppForm/AppForm";
import { Field } from "formik";

export default function CheckoutForm({
  initialValues,
  onSubmit,
  totalDays,
  setPaymentMethod,
  error,
}) {
  const [payment, setPayment] = useState();
  const singleProduct = useApi(rentalApi.getSingleProduct);
  const { id } = useParams();
  useEffect(() => {
    async function fetchProduct() {
      await singleProduct.request(id);
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setPaymentMethod(payment);
  }

  return (
    <>
      <section class="single_product">
        <div class="container">
          <span>Shopping Cart:</span>
          {singleProduct.data && (
            <AppForm initialValues={initialValues} handleSubmit={onSubmit}>
              <FormFields singleProduct={singleProduct.data} error={error} />
            </AppForm>
          )}
        </div>
      </section>

      <div class="final_checkout">
        <div class="container">
          <div class="checkout-info">
            <div class="checkout_method">
              <div class="price">
                <h4>Total Amount</h4>
                <strong>
                  $
                  {singleProduct.data &&
                    totalDays &&
                    singleProduct.data.product.pricePerDay * totalDays}
                </strong>{" "}
              </div>
              <form onSubmit={handleSubmit}>
                <div class="payment_method">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    onChange={() => setPayment("cash")}
                  />{" "}
                  <label>Cash On Delivery</label>
                </div>
                <div class="payment_method">
                  <input
                    type="radio"
                    name="payment"
                    value="stripe"
                    onChange={() => setPayment("stripe")}
                  />{" "}
                  <label>Stripe method</label>
                </div>
                <div class="checkout-button">
                  <button type="submit">Check Out</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FormFields({ singleProduct, error }) {
  return (
    <>
      {singleProduct && (
        <div className="checkout_info">
          <div className="checkout_grid product_img">
            <figure>
              <img
                src={`https://multivendor-ecommerce-restapi.herokuapp.com/${singleProduct.product.image}`}
                alt=""
              />
              <figcaption>
                <p>{singleProduct.product.description}</p>
              </figcaption>
            </figure>
          </div>
          <div className="checkout_grid">
            <label>Address</label>
            <br />
            <Field
              name="shippingAddress"
              placeholder="Enter Shipping Address"
              className="addresss"
            />
            <br />
            <Field
              name="shippingState"
              placeholder="Enter Shipping State"
              className="addresss"
            />
          </div>
          <div class="checkout_grid">
            <label>Price Per Day: </label>
            <strong>${singleProduct.product.pricePerDay}</strong>
            <div class="search-icon">
              <Field
                name="rentingDate"
                class="location"
                type="date"
                placeholder="Start date"
              />
            </div>
            <div class="search-icon">
              <Field
                name="returningDate"
                class="location"
                type="date"
                placeholder="End date"
              />
            </div>
            <button type="submit" class="checkout-button">
              Save
            </button>
            {error.data && error.data.message}
          </div>
        </div>
      )}
    </>
  );
}
