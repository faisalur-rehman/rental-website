import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";
import UpdateModal from "../Modal/UpdateModal";
const Vender = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const allProducts = useApi(rentalApi.getAllProducts);
  useEffect(() => {
    async function fetchProducts() {
      try {
        await allProducts.request();
      } catch (_) {
        console.log("producrs error", allProducts.error);
      }
    }
    fetchProducts();
    //eslint-disable-next-line
  }, []);
  // console.log("all", allProducts);
  function handleModal(id) {
    setId(id);
    setOpen(true);
  }

  return (
    <>
      <div className="body">
        <div className="container">
          <div className="dashboard_window" id="dashboard_window">
            <div className="dashboard_form">
              <div className="total_income">
                <div className="admin_income">
                  <h3>Total income</h3>
                  <strong>$0</strong>
                  <Link to="/stripe" className="submit_button">
                    <button
                      style={{ padding: 5, width: "100%", margin: "8px auto" }}
                    >
                      Transfer
                    </button>
                  </Link>
                </div>
              </div>
              <strong>All Product:</strong>
              <div className="list_selecter">
                <select className="form-control" name="state" id="maxRows">
                  <option value="5000">Show ALL Rows</option>
                </select>
              </div>
              <div className="show_product">
                <table id="table-id">
                  <tbody>
                    <tr>
                      <th>Product Name</th>
                      <th>View Product</th>
                      <th>Edit Detail</th>
                      <th>Delete Product</th>
                      <th>Availability</th>
                    </tr>
                    {allProducts.data &&
                      allProducts.data.product.map((prod) => (
                        <tr>
                          <td>{prod.productTitle}</td>
                          <td>
                            <Link>
                              <i className="fas fa-eye"></i>
                            </Link>
                          </td>
                          <td>
                            <i
                              className="fa fa-edit"
                              onClick={() => handleModal(prod._id)}
                            ></i>
                          </td>
                          <td>
                            <Link>
                              <i className="fas fa-trash-alt"></i>
                            </Link>
                          </td>
                          <td>{prod.isAvailable ? "Yes" : "No"}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateModal open={open} handleClose={() => setOpen(false)} id={id} />
    </>
  );
};

export default Vender;
