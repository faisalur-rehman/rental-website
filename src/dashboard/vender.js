import React, { useEffect } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";
const Vender = () => {
  const vendorRentHistory = useApi(rentalApi.getVendorRentHistory);
  useEffect(() => {
    async function fetchProduct() {
      await vendorRentHistory.request();
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  console.log("history data", vendorRentHistory.data);
  console.log("history error", vendorRentHistory.error);

  return (
    <>
      <div className="body">
        <div className="container">
          <div className="dashboard_window" id="dashboard_window">
            <div className="dashboard_form">
              <div className="total_income">
                <div className="admin_income">
                  <h3>Total income</h3>
                  <strong>$1.5</strong>
                  <div className="submit_button">
                    <button
                      style={{ padding: 5, width: "100%", margin: "8px auto" }}
                    >
                      Transfer
                    </button>
                  </div>
                </div>
              </div>
              <strong>All Product:</strong>
              <div className="list_selecter">
                <select className="form-control" name="state" id="maxRows">
                  <option value="5000">Show ALL Rows</option>
                  {/* <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="70">70</option>
                  <option value="100">100</option> */}
                </select>
              </div>
              <div className="show_product">
                <table id="table-id">
                  <tr>
                    <th>Product Name</th>
                    <th>Renting Date</th>
                    <th>Returning Date</th>
                    <th>Total Price</th>
                    <th>Shipping Address</th>
                  </tr>
                  {vendorRentHistory.data &&
                    vendorRentHistory.data.rentalHistory.map((prod) => (
                      <tr>
                        <td>{prod._id}</td>
                        <td>
                          {new Date(prod.rentingDate).toLocaleDateString(
                            "en-GB"
                          )}
                        </td>
                        <td>
                          {new Date(prod.returningDate).toLocaleDateString(
                            "en-GB"
                          )}
                        </td>
                        <td>${prod.totalPrice}</td>
                        <td>{prod.shippingAddress}</td>
                      </tr>
                    ))}
                </table>
              </div>
              {/* <div className="pagination-container">
                <nav>
                  <ul className="pagination">
                    <li data-page="prev">
                      <span>
                        {" "}
                        &lt; <span className="sr-only">(current)</span>
                      </span>
                    </li>

                    <li data-page="next" id="prev">
                      <span>
                        {" "}
                        &gt; <span className="sr-only">(current)</span>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vender;
