import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51J1POvClkiKKoyU1D4NGQasqz2wPdm7IzQApkljDajhOlc9eZBHl00wox3UAW9zASBInPnfJHaqiNOTjFl6FZIVl002lNywEGw";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
