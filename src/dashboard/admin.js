import React, { useEffect } from "react";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";

const Admin = () => {
  const profile = useApi(rentalApi.userProfile);
  const allRentHistory = useApi(rentalApi.getAllRentHistory);
  useEffect(() => {
    async function fetchProduct() {
      await allRentHistory.request();
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    async function fetchProducts() {
      try {
        await profile.request();
      } catch (_) {}
    }
    fetchProducts();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div class="body">
        <div class="container">
          <div class="dashboard_window" id="dashboard_window">
            <div class="dashboard_form">
              <div class="total_income">
                <div class="admin_income">
                  <h3>Total income by Commission</h3>
                  <strong>
                    ${profile.data && profile.data.balance.toFixed(2)}
                  </strong>
                </div>
              </div>
              <strong>Renting History:</strong>
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
                    <th>Renterning Date</th>
                  </tr>
                  <tbody>
                    {allRentHistory.data &&
                      allRentHistory.data.rentalHistory.map((prod) => (
                        <tr key={prod._id}>
                          <td>{prod._id}</td>
                          <td>{prod.renterId.name}</td>
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

export default Admin;
