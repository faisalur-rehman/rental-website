import React from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import SignUpForm from "./signUpForm";
import * as rentalApi from "../../apis/schedule";

const initialValues = {
  name: "",
  email: "",
  password: "",
  number: "",
  address: "",
  state: "",
};

const SignUp = () => {
  const history = useHistory();

  const signUp = useApi(rentalApi.signUp);

  async function handleSubmit({ formValues }) {
    try {
      await signUp.request(formValues);
      history.push("/");
    } catch (_) {}
  }
  return (
    <div>
      <SignUpForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default SignUp;
