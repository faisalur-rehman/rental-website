import React, { useEffect } from "react";
import "./checkOut.css";
import image from "../image/new-one.jpg";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";
import AppForm from "../AppForm/AppForm";
import { Field } from "formik";

export default function CheckoutForm({ initialValues, onSubmit }) {
  const singleProduct = useApi(rentalApi.getSingleProduct);
  const { id } = useParams();
  useEffect(() => {
    async function fetchProduct() {
      await singleProduct.request(id);
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <section class="single_product">
        <div class="container">
          <span>Shopping Cart:</span>
          {singleProduct.data && (
            <AppForm initialValues={initialValues} handleSubmit={onSubmit}>
              <FormFields singleProduct={singleProduct.data} />
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
                <strong>$300</strong>{" "}
              </div>
              {/* <form> */}
              <div class="payment_method">
                <input type="radio" name="payment" value="cash" />{" "}
                <label>Cash On Delivery</label>
              </div>
              <div class="payment_method">
                <input type="radio" name="payment" value="strip" />{" "}
                <label>Strip method</label>
              </div>
              <div class="checkout-button">
                <button type="button">Check Out</button>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FormFields({ singleProduct }) {
  return (
    <>
      {singleProduct && (
        <div class="checkout_info">
          <div class="checkout_grid product_img">
            <figure>
              <img src={image} alt="" />
              <figcaption>
                <p>{singleProduct.product.description}</p>
              </figcaption>
            </figure>
          </div>
          <div class="checkout_grid">
            <label>QNT</label>
            <br />
            <Field
              name="shippingAddress"
              placeholder="Enter Shipping Address"
            />
            <br />
            <Field name="shippingState" placeholder="Enter Shipping State" />
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
          </div>
        </div>
      )}
      <button type="submit">Submit</button>
    </>
  );
}
