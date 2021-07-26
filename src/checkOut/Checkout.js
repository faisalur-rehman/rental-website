import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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
  const history = useHistory();
  const [totalDays, setTotalDays] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const rentProduct = useApi(rentalApi.rentProduct);
  async function handleSubmit({ formValues }) {
    let diff =
      new Date(formValues.returningDate).getTime() -
      new Date(formValues.rentingDate).getTime();

    let totalDays = diff / (1000 * 3600 * 24);
    setTotalDays(totalDays);
    let formData = { ...formValues, totalDays, productId: id };
    await rentProduct.request(formData);
  }
  console.log("payment", paymentMethod);
  if (paymentMethod) {
    history.push("/stripe");
  }
  rentProduct.data &&
    localStorage.setItem("cs", rentProduct.data.client_secret);
  return (
    <div>
      <CheckoutForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        totalDays={totalDays}
        setPaymentMethod={setPaymentMethod}
        error={rentProduct.error}
      />
    </div>
  );
};

export default Checkout;
