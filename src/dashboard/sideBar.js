import React, { useState } from "react";
import Message from "./message/index";
import Admin from "./admin";
import Vender from "./vender";
import Rent from "./rent";
import AdminAll from "./adminAll";
import VenderRent from "./venderRent";
import "./dashboard.css";
import { Link } from "react-router-dom";
import AddNewProduct from "./addnew";

import axios from "axios";
const initialValues = {
  companyName: "",
  productTitle: "",
  description: "",
  pricePerDay: "",
  address: "",
  state: "",
  isAvailable: "",
  availableDate: "",
};

const SideBar = ({ show, type, handleHide }) => {
  const [image, setImage] = useState();
  const [response, setResponse] = useState("");

  async function handleSubmit({ formValues }) {
    let formData = new FormData();
    formData.append("image", image);
    formData.append("companyName", formValues.companyName);
    formData.append("productTitle", formValues.productTitle);
    formData.append("description", formValues.description);
    formData.append("pricePerDay", formValues.pricePerDay);
    formData.append("address", formValues.address);
    formData.append("state", formValues.state);
    formData.append("isAvailable", formValues.isAvailable);
    formData.append("availableDate", formValues.availableDate);
    try {
      const { data } = await axios.post(
        `https://multivendor-ecommerce-restapi.herokuapp.com/product/add`,
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": `multipart/form-data`,
          },
        }
      );
      console.log(data);
      setResponse(data.message);
    } catch (error) {
      console.log(error.response);
    }
  }
  const [act, setAct] = React.useState({
    main: true,
    msg: false,
    add: false,
    all: false,
    rent: false,
  });
  const clearAll = () => {
    setAct({
      main: false,
      msg: false,
      add: false,
      all: false,
      rent: false,
    });
  };
  const handleClick = (value) => {
    clearAll();
    setAct((act) => {
      let action = act;
      action[value] = true;
      return action;
    });
  };
  return (
    <>
      <section class={`side_bar ${show && "side_bar-show"}`}>
        <Link class="closebtn sidebar-btn">
          <i onClick={handleHide} class="fas fa-times"></i>
        </Link>

        <div class="dashboard_buttons" id="change_active">
          {type === "renting" ? (
            <Link
              class={`btn non-active ${act.main && "active"}`}
              id="dashboard"
              onClick={() => handleClick("main")}
            >
              <span>Renting History</span>
            </Link>
          ) : (
            <Link
              class={`btn non-active ${act.main && "active"}`}
              id="dashboard"
              onClick={() => handleClick("main")}
            >
              <span>Dashboard</span>
            </Link>
          )}
          <Link
            class={`btn non-active ${act.msg && "active"}`}
            onClick={() => handleClick("msg")}
          >
            <span>Message Window</span>
          </Link>
          {type === "renting" ? (
            ""
          ) : type === "vender" ? (
            <Link
              class={`btn non-active ${act.add && "active"}`}
              onClick={() => handleClick("add")}
            >
              <span>Add new product</span>
            </Link>
          ) : (
            <Link
              class={`btn non-active ${act.all && "active"}`}
              onClick={() => handleClick("all")}
            >
              <span>All Product</span>
            </Link>
          )}

          {type === "vender" ? (
            <Link
              class={`btn non-active ${act.rent && "active"}`}
              onClick={() => handleClick("rent")}
            >
              <span>Renting history</span>
            </Link>
          ) : (
            ""
          )}
        </div>
      </section>
      {act.main ? (
        type === "admin" ? (
          <Admin />
        ) : type === "vender" ? (
          <Vender />
        ) : (
          <Rent />
        )
      ) : (
        ""
      )}
      {act.msg ? <Message /> : ""}
      {act.all ? <AdminAll handleClick={handleClick} /> : ""}
      {act.add ? (
        <>
          <AddNewProduct
            initialValues={initialValues}
            onSubmit={handleSubmit}
            setImage={setImage}
          />
          <p style={{ width: "34%", margin: "auto" }}>{response}</p>
        </>
      ) : (
        ""
      )}
      {act.rent ? <VenderRent handleClick={handleClick} /> : ""}
    </>
  );
};

export default SideBar;
