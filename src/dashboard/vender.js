import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
const Vender = () => {
  return (
    <>
      <div class="body">
        <div class="container">
          <div class="dashboard_window" id="dashboard_window">
            <div class="dashboard_form">
              <div class="total_income">
                <div class="admin_income">
                  <h3>Total income</h3>
                  <strong>$1.5</strong>
                  <div class="submit_button">
                    <button
                      style={{ padding: 5, width: "100%", margin: "8px auto" }}
                    >
                      Transfer
                    </button>
                  </div>
                </div>
              </div>
              <strong>All Product:</strong>
              <div class="list_selecter">
                <select class="form-control" name="state" id="maxRows">
                  <option value="5000">Show ALL Rows</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="70">70</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div class="show_product">
                <table id="table-id">
                  <tr>
                    <th>Product Name</th>
                    <th>View Product</th>
                    <th>Edit Detail</th>
                    <th>Delete Product</th>
                    <th>Availability</th>
                  </tr>

                  <tr>
                    <td></td>
                    <td>
                      <Link>
                        <i class="fas fa-eye"></i>
                      </Link>
                    </td>
                    <td>
                      <i class="fa fa-edit"></i>
                    </td>
                    <td>
                      <Link>
                        <i class="fas fa-trash-alt"></i>
                      </Link>
                    </td>
                    <td></td>
                  </tr>
                </table>
              </div>
              <div class="pagination-container">
                <nav>
                  <ul class="pagination">
                    <li data-page="prev">
                      <span>
                        {" "}
                        &lt; <span class="sr-only">(current)</span>
                      </span>
                    </li>

                    <li data-page="next" id="prev">
                      <span>
                        {" "}
                        &gt; <span class="sr-only">(current)</span>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vender;
