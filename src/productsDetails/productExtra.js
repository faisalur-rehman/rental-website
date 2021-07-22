import React from "react";
import { Link } from "react-router-dom";
import image from "../image/new-one.jpg";
const ProductExtra = ({ productId }) => {
  return (
    <>
      <section id="produt-detail-extra">
        <div class="container">
          <div class="main">
            <div class="author-info">
              <strong>Seller Info</strong>
              <div class="author-detail">
                <figure>
                  <img src={image} alt="" />
                  <figcaption>
                    <span>Center for the Cinematic Arts, Inc.</span>
                  </figcaption>
                </figure>
                <button>Message</button>
              </div>
            </div>

            <div class="cart-part">
              <div style={{ display: "flex", marginBottom: 10 }}>
                <div class="search-icon">
                  <input
                    class="location"
                    type="date"
                    placeholder="Start date"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                  ></input>
                  {/* <i class="far fa-calendar-minus" id="cancle"></i> */}
                </div>
                <div class="search-icon">
                  <input
                    class="location"
                    type="date"
                    placeholder="End date"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                  ></input>
                  {/* <i class="far fa-calendar-minus" id="cancle"></i> */}
                </div>
              </div>
              <div>
                <div class="cart-box">
                  <Link className="aa" to="/ProductDetails">
                    Add to cart
                  </Link>
                  <Link
                    className="aa"
                    to={`/ProductDetails/CheckOut/${productId}`}
                  >
                    Check Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductExtra;
