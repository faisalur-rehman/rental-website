import React from "react";
import { Link } from "react-router-dom";
const Products = ({ discount, name, retail, offer, img }) => {
  return (
    <>
      <li key={name}>
        <div class="main">
          <small class="discount">{discount}% OFF</small>
          <Link to="/ProductDetails">
            <figure>
              <img src={img} alt="" />
            </figure>
          </Link>
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
    </>
  );
};

export default Products;
