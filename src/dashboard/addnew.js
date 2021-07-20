import React from "react";
import { Field } from "formik";
import AppForm from "../AppForm/AppForm";

export default function AddNewProduct({ initialValues, onSubmit, setImage }) {
  return (
    <AppForm initialValues={initialValues} handleSubmit={onSubmit}>
      <FormFields setImage={setImage} />
    </AppForm>
  );
}
// const Addnew = () => {
//   return (
//     <>
//       <div class="add_product_box" id="new_product">
//         <div class="product_container">
//           <div class="product_form">
//             <form>
//               <strong>Add New Product</strong>
//               <div class="product_input_field">
//                 <div class="inner_field">
//                   <Field
//                     name="productTitle"
//                     type="text"
//                     placeholder="Product Name"
//                   />
//                   <Field
//                     name="description"
//                     type="text"
//                     placeholder="Product Discription"
//                   />
//                   <Field
//                     name="pricePerDay"
//                     type="number"
//                     placeholder="Price Per Day"
//                   />
//                   <Field name="address" type="address" placeholder="Address" />
//                   <Field type="text" placeholder="Modal Number" />
//                   <Field type="address" placeholder="Pick Up location" />
//                 </div>
//                 <div class="inner_field">
//                   <Field
//                     name="companyName"
//                     type="text"
//                     placeholder="company Name"
//                   />
//                   {/* <select>
//                     <option value="category" disabled>
//                       Select Category
//                     </option>
//                     <option value="category">Select Category</option>
//                   </select> */}
//                   <Field name="state" type="text" placeholder="City" />
//                   <Field name="availableDate" type="date" placeholder="Date" />
//                   <div class="checkbox">
//                     <label>Available </label>
//                     <Field
//                       name="isAvailable"
//                       type="checkbox"
//                       placeholder="City"
//                     />
//                   </div>
//                   <Field
//                     type="file"
//                     name="fileToUpload"
//                     id="picture"
//                     class="select_product_img"
//                   />
//                 </div>
//               </div>
//               <div class="submit_button">
//                 <button type="submit">Add Product</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Addnew;

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
                <label>Available </label>
                <Field name="isAvailable" type="checkbox" placeholder="City" />
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
            <button type="submit">Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}
