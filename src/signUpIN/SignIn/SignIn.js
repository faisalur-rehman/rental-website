import React from "react";
import useApi from "../../hooks/useApi";
import SignInForm from "../SignInForm";
import * as rentalApi from "../../apis/schedule";
import { useHistory } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { error, request } = useApi(rentalApi.signIn);
  const history = useHistory();
  async function handleSubmit({ formValues }) {
    try {
      const { data } = await request(formValues);
      console.log("data", data);
      localStorage.setItem("token", data.token);
      history.push("/landing");
    } catch (_) {}
  }

  console.log("error", error);
  return (
    <div>
      <SignInForm initialValues={initialValues} onSubmit={handleSubmit} />
      {Object.keys(error).length > 0 && (
        <p
          style={{
            width: "40%",
            margin: "10px auto",
            color: "red",
            marginTop: 30,
          }}
        >
          {error.data.message}
        </p>
      )}
    </div>
  );
};

export default SignIn;
