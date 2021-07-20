import React from "react";
import { Link } from "react-router-dom";

import { Field } from "formik";
import AppForm from "../../AppForm/AppForm";

export default function SignUpForm({ initialValues, onSubmit }) {
  return (
    <AppForm initialValues={initialValues} handleSubmit={onSubmit}>
      <FormFields />
    </AppForm>
  );
}

function FormFields() {
  return (
    <div class="signup-form">
      <div class="container-sign">
        <h2>Welcome to ShareGrid</h2>
        <span>
          <h5>Already a member? </h5>
          <Link to="/">Sign in</Link>
        </span>
        {/* <form onSubmit={handleSubmit}> */}
        <div class="input-fields">
          <Field name="name" type="text" placeholder="Name" />
          <Field name="email" type="email" placeholder="Email" />
          <Field name="password" type="password" placeholder="Password" />
          <Field name="number" placeholder="Number" />
          <Field name="address" placeholder="Address" />
          <Field name="state" placeholder="State" />
        </div>
        <div class="checkbox">
          <input type="checkbox"></input>
          <label>
            By signing up as a member, I agree to ShareGrid's{" "}
            <Link>Terms of Service, Privacy Policy</Link>, and{" "}
            <Link>Community Rules</Link>
          </label>
        </div>
        <button type="submit">Join Now</button>
        {/* </form> */}
      </div>
    </div>
  );
}
