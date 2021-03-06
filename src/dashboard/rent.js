import React, { useEffect } from "react";
import "./dashboard.css";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";

const Rent = () => {
  const rentalRentHistory = useApi(rentalApi.getRenterRentHistory);
  useEffect(() => {
    async function fetchProduct() {
      await rentalRentHistory.request();
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="body">
        <div className="container">
          <div class="dashboard_window" id="dashboard_window">
            <div class="dashboard_form">
              <strong>All Renting Product:</strong>
              <div class="list_selecter">
                <select class="form-control" name="state" id="maxRows">
                  <option value="5000">Show ALL Rows</option>
                </select>
              </div>
              <div class="show_product">
                <table id="table-id">
                  <tr>
                    <th>Product Name</th>

                    <th>Vender Name</th>
                    <th>Price</th>
                    <th>Renting Date</th>
                    <th>Returning Date</th>
                  </tr>
                  <tbody>
                    {rentalRentHistory.data &&
                      rentalRentHistory.data.rentalHistory.map((prod) => (
                        <tr key={prod._id}>
                          <td>{prod._id}</td>

                          <td>{prod.vendorId.name}</td>
                          <td>${prod.totalPrice}</td>
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
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rent;
