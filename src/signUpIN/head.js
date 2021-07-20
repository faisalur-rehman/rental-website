import React from "react";
import "./head.css";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

const Head = () => {
  return (
    <>
      <div class="head-bar">
        <div class="logo">
          <Link to="/landing">
            {" "}
            <img src={logo} alt="" />
          </Link>
        </div>
        <div class="head-nav-bar">
          <Link>
            <i class="fas fa-shopping-cart"></i>
          </Link>
          <Link>
            <i class="fas fa-bars"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Head;
