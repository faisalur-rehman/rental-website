import React, { useState } from "react";
import disnep from "../image/disnep.png";
import amazon from "../image/amazon.png";
import hbo from "../image/hbo.png";
import fb from "../image/fb.png";
import useApi from "../hooks/useApi";
import * as rentalApi from "../apis/schedule";
const Banner = ({ setSearchedProducts }) => {
  const searchedProducts = useApi(rentalApi.searchProduct);
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await searchedProducts.request({
        address,
        state,
        startingDate,
        endingDate,
      });
      setSearchedProducts(data.product);
    } catch (_) {}
  }

  // console.log("searched", searchedProducts.data);
  return (
    <div class="banner">
      <figure>
        <div class="text">
          <span>
            <h3>The largest, most trusted</h3>
            <h2>camera sharing community</h2>
          </span>
        </div>
        <div class="search-item">
          <form onSubmit={handleSubmit}>
            <div class="search-icon">
              <input
                value={address}
                onChange={({ target }) => setAddress(target.value)}
                type="search"
                placeholder="Address"
              ></input>
              <i class="fas fa-search"></i>
            </div>
            <div class="search-icon address">
              <input
                class="location"
                value={state}
                onChange={({ target }) => setState(target.value)}
                type="text"
                placeholder="State"
              />
              <i class="fas fa-map-marker-alt"></i>
              <i class="fas fa-times" id="cancle"></i>
            </div>
            <div class="search-icon low_width">
              <input
                class="location"
                type="date"
                value={startingDate}
                onChange={({ target }) => setStartingDate(target.value)}
                placeholder="start date"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
              />
              {/* <i class="far fa-calendar-minus" id="cancle"></i> */}
            </div>
            <div class="search-icon low_width">
              <input
                class="location"
                type="date"
                value={endingDate}
                onChange={({ target }) => setEndingDate(target.value)}
                placeholder="End date"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
              />
              {/* <i class="far fa-calendar-minus" id="cancle"></i> */}
            </div>
            <button type="submit">search</button>
          </form>
        </div>

        <div class="members">
          <small>Members of Sharedgrid</small>
          <div class="member-list">
            <ul>
              <li>
                <img src={disnep} alt="" />
              </li>
              <li>
                <img src={amazon} alt="" />
              </li>
              <li>
                <img src={hbo} alt="" />
              </li>
              <li>
                <img src={fb} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default Banner;
