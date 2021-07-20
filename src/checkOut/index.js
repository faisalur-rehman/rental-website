import React from "react";
import "./checkOut.css";
import image from "../image/new-one.jpg";

const Index = () => {
  return (
    <>
      <section class="single_product">
        <div class="container">
          <span>Shopping Cart:</span>
          <div class="checkout_info">
            <div class="checkout_grid product_img">
              <figure>
                <img src={image} alt="" />
                <figcaption>
                  <p>
                    Rent a Aputure LS 600d Pro Light Storm Daylight LED Light
                  </p>
                </figcaption>
              </figure>
            </div>
            <div class="checkout_grid">
              <form>
                <label>QNT</label>
                <input type="number"></input>
              </form>
            </div>
            <div class="checkout_grid">
              <form>
                <label>price</label>
                <strong>$300</strong>
                <div class="search-icon">
                  <input
                    class="location"
                    type="text"
                    placeholder="start date"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                  />
                  <i class="far fa-calendar-minus" id="cancle"></i>
                </div>
                <div class="search-icon">
                  <input
                    class="location"
                    type="text"
                    placeholder="End date"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                  ></input>
                  <i class="far fa-calendar-minus" id="cancle"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div class="final_checkout">
        <div class="container">
          <div class="checkout-info">
            <div class="checkout_method">
              <div class="price">
                <h4>Total Amount</h4>
                <strong>$300</strong>{" "}
              </div>
              <form>
                <div class="payment_method">
                  <input type="radio" name="payment" value="cash" />{" "}
                  <label>Cash On Delivery</label>
                </div>
                <div class="payment_method">
                  <input type="radio" name="payment" value="strip" />{" "}
                  <label>Strip method</label>
                </div>
                <div class="checkout-button">
                  <button type="button">Check Out</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
