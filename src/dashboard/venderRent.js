import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";
const VenderRent = ({ handleClick }) => {
  const vendorRentHistory = useApi(rentalApi.getVendorRentHistory);
  useEffect(() => {
    async function fetchProduct() {
      await vendorRentHistory.request();
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div class="body">
        <div class="container">
          <div class="dashboard_window">
            <div class="dashboard_form">
              <div class="back_to_dashboard">
                <strong>Product Rental History:</strong>
                <Link
                  className="pointer"
                  onClick={() => {
                    handleClick("main");
                  }}
                >
                  Back to Dashboard
                </Link>
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
                  {vendorRentHistory.data &&
                    vendorRentHistory.data.rentalHistory.map((prod) => (
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

export default VenderRent;
