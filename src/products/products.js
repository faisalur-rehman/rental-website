import React from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  console.log("props", props);
  return (
    <>
      <li>
        <div class="main">
          {props.discount && (
            <small class="discount">{props.discount}% OFF</small>
          )}
          <Link to={`/ProductDetails/${props._id}`}>
            <figure>
              <img
                src={`https://multivendor-ecommerce-restapi.herokuapp.com/${props.image}`}
                alt=""
              />
            </figure>
          </Link>
          <div class="figcaption">
            <h3>{props.productTitle}</h3>
            <span>Retail Price: ${props.pricePerDay}.00</span>
            <span>
              Available:<small>{props.isAvailable ? "Yes" : "No"}</small>
            </span>
            <Link to={`/ProductDetails/${props._id}`}>
              <i class="icon-shopping-cart"></i>Add to cart
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};

export default Products;
