import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";
const AdminAll = ({ handleClick }) => {
  const allProducts = useApi(rentalApi.adminAllProducts);
  useEffect(() => {
    async function fetchProduct() {
      await allProducts.request();
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  console.log("all retnal", allProducts.data);
  console.log("all retnal error", allProducts.error);

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

                      {/* <tr>
                        <td></td>
                        <td>
                          <Link onclick="view_product_detail()">
                            <i class="fas fa-eye"></i>
                          </Link>
                        </td>
                        <td>
                          <Link onclick="edit_product()">
                            <i class="fa fa-edit"></i>
                          </Link>
                        </td>
                        <td>
                          <Link>
                            <i class="fas fa-trash-alt"></i>
                          </Link>
                        </td>
                      </tr> */}
                      <tbody>
                        {allProducts.data &&
                          allProducts.data.product.map((prod) => (
                            <tr key={prod._id}>
                              <td>{prod._id}</td>
                              <td>
                                <Link onclick="view_product_detail()">
                                  <i class="fas fa-eye"></i>
                                </Link>
                              </td>
                              <td>
                                <Link onclick="edit_product()">
                                  <i class="fa fa-edit"></i>
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
    </>
  );
};

export default AdminAll;
