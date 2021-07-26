import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";
import UpdateModal from "../Modal/UpdateModal";
const AdminAll = ({ handleClick }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const allProducts = useApi(rentalApi.adminAllProducts);
  useEffect(() => {
    async function fetchProduct() {
      await allProducts.request();
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  function handleModal(id) {
    setId(id);
    setOpen(true);
  }

  return (
    <>
      <section class="dashboard">
        <section class="content">
          <div class="body">
            <div class="container">
              <div class="dashboard_window">
                <div class="dashboard_form">
                  <div class="back_to_dashboard">
                    <strong>All Product:</strong>
                    <Link
                      className="pointer"
                      onClick={() => handleClick("main")}
                    >
                      Back to Dashboard
                    </Link>
                  </div>
                  <div class="list_selecter">
                    <select class="form-control" name="state" id="maxRows">
                      <option value="5000">Show ALL Rows</option>
                    </select>
                  </div>
                  <div class="show_product">
                    <table id="table-id">
                      <tr>
                        <th>Product Name</th>
                        <th>View Product</th>
                        <th>Edit Detail</th>
                        <th>Delete Product</th>
                      </tr>
                      <tbody>
                        {allProducts.data &&
                          allProducts.data.product.map((prod) => (
                            <tr key={prod._id}>
                              <td>{prod.productTitle}</td>
                              <td>
                                <Link onclick="view_product_detail()">
                                  <i class="fas fa-eye"></i>
                                </Link>
                              </td>
                              <td>
                                <Link onclick="edit_product()">
                                  <i
                                    class="fa fa-edit"
                                    onClick={() => handleModal(prod._id)}
                                  ></i>
                                </Link>
                              </td>
                              <td>
                                <Link>
                                  <i class="fas fa-trash-alt"></i>
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <UpdateModal open={open} handleClose={() => setOpen(false)} id={id} />
    </>
  );
};

export default AdminAll;
