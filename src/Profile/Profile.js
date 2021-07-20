import React, { useEffect } from "react";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";

const Profile = () => {
  const { data, request, error } = useApi(rentalApi.userProfile);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await request();
        console.log("profile", data);
      } catch (_) {
        console.log(error);
      }
    }
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <div class="signup-form">
        <div class="container-sign">
          <h2>Profile</h2>

          <div class="input-fields">
            {data && (
              <>
                <label>
                  Name:{" "}
                  <input
                    name="name"
                    value={data.name}
                    type="text"
                    placeholder="Name"
                    disabled
                  />
                </label>
                <label>
                  Email: <input name="email" value={data.email} disabled />
                </label>
                <label>
                  Balance: <input name="text" value={data.balance} disabled />
                </label>
                <label>
                  Number: <input name="text" value={data.number} disabled />
                </label>
                <label>
                  Address: <input name="text" value={data.address} disabled />
                </label>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
