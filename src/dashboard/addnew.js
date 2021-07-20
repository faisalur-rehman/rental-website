import React from "react";

const Addnew = () => {
  return (
    <>
      <div class="add_product_box" id="new_product">
        <div class="product_container">
          <div class="product_form">
            <form>
              <strong>Add New Product</strong>
              <div class="product_input_field">
                <div class="inner_field">
                  <input type="text" placeholder="Product Name"></input>
                  <input type="text" placeholder="Product Discription"></input>
                  <input type="number" placeholder="Price Per Day"></input>
                  <input type="address" placeholder="Address"></input>
                  <input type="text" placeholder="Modal Number"></input>
                  <input type="address" placeholder="Pick Up location"></input>
                </div>
                <div class="inner_field">
                  <input type="text" placeholder="company Name"></input>
                  <select>
                    <option value="category" disabled>
                      Select Category
                    </option>
                    <option value="category">Select Category</option>
                  </select>
                  <input type="text" placeholder="City"></input>
                  <input type="date" placeholder="Date"></input>
                  <div class="checkbox">
                    <label>Unavailable </label>
                    <input type="checkbox" placeholder="City"></input>
                  </div>
                  <input
                    type="file"
                    name="fileToUpload"
                    id="picture"
                    class="select_product_img"
                  />
                </div>
              </div>
              <div class="submit_button">
                <button type="submit">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addnew;
