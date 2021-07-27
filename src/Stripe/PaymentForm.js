import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#000",
    },
  },
};

export default function PaymentForm() {
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  console.log("cs", localStorage.getItem("cs"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await stripe.confirmCardPayment(localStorage.getItem("cs"), {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: "email@gmail.com",
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      setMessage(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        setMessage("Money is in the bank!");
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="text">Please Enter your Credit Card Details</h3>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button className="pay-btn">Pay</button>
        <p className="text" style={{ marginTop: 10 }}>
          {message}
        </p>
      </form>
    </>
  );
}
