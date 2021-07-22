import React from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  return (
    <>
      <li>
        <div class="main">
          {props.discount && (
            <small class="discount">{props.discount}% OFF</small>
          )}
          <Link to={`/ProductDetails/${props._id}`}>
            <figure>
              <img src={props.image} alt="" />
            </figure>
          </Link>
          <div class="figcaption">
            <h3>{props.companyName}</h3>
            <span>Retail Price: ${props.pricePerDay}.00</span>
            {/* <span>
              Offer Price:<small>${offer}.00</small>
            </span> */}
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
