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

  const { error, request } = useApi(rentalApi.signUp);

  async function handleSubmit({ formValues }) {
    try {
      const { data } = await request(formValues);
      console.log(data);
      history.push("/");
    } catch (_) {}
  }
  return (
    <div>
      <SignUpForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
};

export default SignUp;
