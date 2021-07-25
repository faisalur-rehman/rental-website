import React, { useState, useEffect } from "react";
import { Modal } from "@material-ui/core";
import { Field } from "formik";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";
import AppForm from "../AppForm/AppForm";
import axios from "axios";

let initialValues = {
  companyName: "",
  productTitle: "",
  description: "",
  pricePerDay: "",
  address: "",
  state: "",
  isAvailable: "",
  availableDate: "",
};
export default function UpdateModal(props) {
  const [image, setImage] = useState();
  const [, setValues] = useState();
  const getSingleProduct = useApi(rentalApi.getSingleProduct);
  useEffect(() => {
    initialValues = {};
    async function getData() {
      console.log("here");
      try {
        const { data } = await getSingleProduct.request(props.id);
        initialValues.companyName = data.product.companyName;
        initialValues.productTitle = data.product.productTitle;
        initialValues.description = data.product.description;
        initialValues.pricePerDay = data.product.pricePerDay;
        initialValues.address = data.product.address;
        initialValues.state = data.product.state;
        initialValues.availableDate = data.product.availableDate.split("T")[0];
        initialValues.isAvailable = data.product.isAvailable;
        setValues(initialValues);
      } catch (_) {}
    }
    getData();
    //eslint-disable-next-line
  }, [props.id]);

  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    let formData = new FormData();
    image && formData.append("image", image);
    formData.append("companyName", formValues.companyName);
    formData.append("productTitle", formValues.productTitle);
    formData.append("description", formValues.description);
    formData.append("pricePerDay", formValues.pricePerDay);
    formData.append("address", formValues.address);
    formData.append("state", formValues.state);
    formData.append("isAvailable", formValues.isAvailable);
    formData.append("availableDate", formValues.availableDate);
    formData.append("productId", props.id);
    try {
      const { data } = await axios.post(
        `https://multivendor-ecommerce-restapi.herokuapp.com/product/update`,
        { productId: props.id },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            // "Content-Type": `multipart/form-data`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
          <FormFields setImage={setImage} />
        </AppForm>
      </Modal>
    </div>
  );
}

function FormFields({ setImage }) {
  function handleImage({ target }) {
    setImage(target.files[0]);
  }
  return (
    <div class="add_product_box" id="new_product">
      <div class="product_container">
        <div class="product_form">
          <strong>Add New Product</strong>
          <div class="product_input_field">
            <div class="inner_field">
              <Field
                name="productTitle"
                type="text"
                placeholder="Product Name"
              />
              <Field
                name="description"
                type="text"
                placeholder="Product Discription"
              />
              <Field
                name="pricePerDay"
                type="number"
                placeholder="Price Per Day"
              />
              <Field name="address" type="address" placeholder="Address" />
              {/* <Field type="text" placeholder="Modal Number" />
                  <Field name='' type="address" placeholder="Pick Up location" /> */}
            </div>
            <div class="inner_field">
              <Field
                name="companyName"
                type="text"
                placeholder="company Name"
              />

              <Field name="state" type="text" placeholder="State" />
              <Field name="availableDate" type="date" placeholder="Date" />
              <div class="checkbox">
                <Field name="isAvailable" type="checkbox" placeholder="City" />
                <label>Available </label>
              </div>
              <input
                type="file"
                name="fileToUpload"
                id="picture"
                class="select_product_img"
                onChange={handleImage}
              />
            </div>
          </div>
          <div class="submit_button">
            <button type="submit">Update Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}
