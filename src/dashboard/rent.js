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

  console.log("retnal", rentalRentHistory.data);
  console.log("retnal error", rentalRentHistory.error);

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
                    <th>Renter Name</th>
                    <th>Vender Name</th>
                    <th>Price</th>
                    <th>Renting Date</th>
                    <th>Returning Date</th>
                  </tr>
                  {rentalRentHistory.data &&
                    rentalRentHistory.data.rentalHistory.map((prod) => (
                      <tr key={prod._id}>
                        <td>{prod._id}</td>
                        <td>{prod.renterName}</td>
                        <td>{prod.vendorName}</td>
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
