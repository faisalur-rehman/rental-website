import React, { useState } from "react";
import "./Transfer.css";
import * as api from "../apis/schedule";
import useApi from "../hooks/useApi";
import { useHistory } from "react-router-dom";

const Transfer = () => {
  const history = useHistory();
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const { request, data } = useApi(api.transferMoney);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data } = await request({ accountHolderName, accountNumber });
      console.log("data", data);
      setTimeout(() => {
        history.push("/landing");
      }, 6000);
    } catch (_) {}
  }

  return (
    <div>
      <div class="transfer-field">
        <p>
          Please enter your account number, where you want to transfer money.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Account Holder Name:</label>
            <input
              placeholder="Name"
              value={accountHolderName}
              onChange={({ target }) => setAccountHolderName(target.value)}
              required
            />
          </div>
          <div>
            <label>Account Number:</label>
            <br />
            <input
              placeholder="Account Number"
              value={accountNumber}
              type="number"
              onChange={({ target }) => setAccountNumber(target.value)}
              required
            />
          </div>

          {data && (
            <p style={{ color: "green" }}>
              {data.message} Redirecting to home page...
            </p>
          )}

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Transfer;
