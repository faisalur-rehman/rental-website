import React from "react";
import "./dashboard.css";
import SideBar from "./sideBar";
import image from "../image/logo.png";
import { Link } from "react-router-dom";
import svgImage from "../image/bar.png";

const DashHead = ({ type }) => {
  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    if (!show) setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <>
      <div class="dash-header-bar">
        <div class="dash-sidebar-btn">
          <img
            style={{ width: 40, height: 40 }}
            src={svgImage}
            class="fas fa-bars"
            onClick={handleShow}
            alt=""
          />
        </div>

        <div class="logo">
          <Link to="/landing">
            <img src={image} alt="" />
          </Link>
        </div>
      </div>

      <SideBar show={show} type={type} handleHide={handleHide} />
    </>
  );
};

export default DashHead;
