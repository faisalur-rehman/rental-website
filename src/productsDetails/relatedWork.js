import React from "react";
import image from "../image/new-one.jpg";
import { related } from "../variables";
import { Link } from "react-router-dom";

const RelatedWork = () => {
  return (
    <>
      <div class="our-latest-product" id="related-products">
        <div class="container">
          <p>Related Products</p>

          <div class="list">
            <ul>
              {related.map((product) => {
                const { discount, name, img, retail, offer } = product;
                return (
                  <li>
                    <div class="main">
                      <small class="discount">{discount}% OFF</small>
                      <figure className="fig-hov">
                        <img src={image} alt="" />

                        {/* <!-- <a href="#" class="search"><i class="icon-magnifying-glass"></i></a>
                           <a href="#" class="link"><i class="icon-broken-link"></i></a> --> */}
                      </figure>

                      <div class="figcaption">
                        <h3>{name}</h3>
                        <span>Retail Price: ${retail}.00</span>
                        <span>
                          Offer Price:<small>${offer}.00</small>
                        </span>
                        <Link>
                          <i class="icon-shopping-cart"></i>Add to cart
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedWork;
