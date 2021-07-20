import React from "react";
import "./dashboard.css";
import SideBar from "./sideBar";
import image from "../image/logo.png";
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
          <i class="fas fa-bars" onClick={handleShow}></i>
        </div>

        <div class="logo">
          <img src={image} alt="" />
        </div>
      </div>

      <SideBar show={show} type={type} handleHide={handleHide} />
    </>
  );
};

export default DashHead;
