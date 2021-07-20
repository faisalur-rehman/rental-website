import React from "react";
import { Link } from "react-router-dom";

import "./loginform.css";
import { Field } from "formik";
import AppForm from "../AppForm/AppForm";

export default function SignInForm({ initialValues, onSubmit }) {
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
          <h5>Don't Have an Accout? </h5>
          <Link to="/SignUp">Sign up</Link>
        </span>

        <div class="input-fields">
          <Field name="email" type="email" placeholder="Email" />
          <Field name="password" type="password" placeholder="Password" />
        </div>
        <div class="checkbox">
          <Field type="checkbox" />
          <label>
            By Login as a member, I agree to ShareGrid's{" "}
            <Link>Terms of Service, Privacy Policy</Link>, and{" "}
            <Link>Community Rules</Link>
          </label>
        </div>
        <button type="submit">Login Here</button>
      </div>
    </div>
  );
}
