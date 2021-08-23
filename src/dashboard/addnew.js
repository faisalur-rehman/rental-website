import React from "react";
import { Field } from "formik";
import AppForm from "../AppForm/AppForm";

export default function AddNewProduct({
  initialValues,
  onSubmit,
  setImage,
  response,
}) {
  return (
    <AppForm initialValues={initialValues} handleSubmit={onSubmit}>
      <FormFields setImage={setImage} response={response} />
    </AppForm>
  );
}

function FormFields({ setImage, response }) {
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
          <p style={{ margin: "10px 20px", color: "white" }}>{response}</p>

          <div class="submit_button">
            <button type="submit">Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}
