import React from "react";
import disnep from "../image/disnep.png";
import amazon from "../image/amazon.png";
import hbo from "../image/hbo.png";
import fb from "../image/fb.png";
const Banner = () => {
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
          <form>
            <div class="search-icon">
              <input type="search" placeholder="search"></input>
              <i class="fas fa-search"></i>
            </div>
            <div class="search-icon address">
              <input class="location" type="text" />
              <i class="fas fa-map-marker-alt"></i>
              <i class="fas fa-times" id="cancle"></i>
            </div>
            <div class="search-icon low_width">
              <input
                class="location"
                type="text"
                placeholder="start date"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
              />
              <i class="far fa-calendar-minus" id="cancle"></i>
            </div>
            <div class="search-icon low_width">
              <input
                class="location"
                type="text"
                placeholder="End date"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
              />
              <i class="far fa-calendar-minus" id="cancle"></i>
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
