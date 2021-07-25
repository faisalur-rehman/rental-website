import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51JGiHVSENlwzcdvJovkQBzTJxOc6NIKMTB53OznJKGzSgajlshT4nMeZyN17afi006wKzfolYwiIHXQ1sLXijoWP00jwuMLYWR";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
