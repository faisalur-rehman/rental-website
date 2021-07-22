import React from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./index";
import * as rentalApi from "../apis/schedule";
import useApi from "../hooks/useApi";

const initialValues = {
  totalDays: "",
  rentingDate: "",
  returningDate: "",
  shippingAddress: "",
  shippingState: "",
};

const Checkout = () => {
  const { id } = useParams();
  const rentProduct = useApi(rentalApi.rentProduct);
  async function handleSubmit({ formValues }) {
    let diff =
      new Date(formValues.returningDate).getTime() -
      new Date(formValues.rentingDate).getTime();

    let totalDays = diff / (1000 * 3600 * 24);
    let formData = { ...formValues, totalDays, productId: id };
    await rentProduct.request(formData);
  }
  return (
    <div>
      <CheckoutForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default Checkout;
