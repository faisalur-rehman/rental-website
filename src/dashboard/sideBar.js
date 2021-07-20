import React from "react";
import Message from "./message/index";
import Admin from "./admin";
import Vender from "./vender";
import Rent from "./rent";
import AdminAll from "./adminAll";
import Addnew from "./addnew";
import VenderRent from "./venderRent";
import "./dashboard.css";
import { Link } from "react-router-dom";
const SideBar = ({ show, type, handleHide }) => {
  const [act, setAct] = React.useState({
    main: true,
    msg: false,
    add: false,
    all: false,
    rent: false,
  });
  const clearAll = () => {
    setAct({
      main: false,
      msg: false,
      add: false,
      all: false,
      rent: false,
    });
  };
  const handleClick = (value) => {
    clearAll();
    setAct((act) => {
      let action = act;
      action[value] = true;
      return action;
    });
  };
  return (
    <>
      <section class={`side_bar ${show && "side_bar-show"}`}>
        <Link class="closebtn sidebar-btn">
          <i onClick={handleHide} class="fas fa-times"></i>
        </Link>

        <div class="dashboard_buttons" id="change_active">
          {type === "renting" ? (
            <Link
              class={`btn non-active ${act.main && "active"}`}
              id="dashboard"
              onClick={() => handleClick("main")}
            >
              <span>Renting History</span>
            </Link>
          ) : (
            <Link
              class={`btn non-active ${act.main && "active"}`}
              id="dashboard"
              onClick={() => handleClick("main")}
            >
              <span>Dashboard</span>
            </Link>
          )}
          <Link
            class={`btn non-active ${act.msg && "active"}`}
            onClick={() => handleClick("msg")}
          >
            <span>Message Window</span>
          </Link>
          {type === "renting" ? (
            ""
          ) : type === "vender" ? (
            <Link
              class={`btn non-active ${act.add && "active"}`}
              onClick={() => handleClick("add")}
            >
              <span>Add new product</span>
            </Link>
          ) : (
            <Link
              class={`btn non-active ${act.all && "active"}`}
              onClick={() => handleClick("all")}
            >
              <span>All Product</span>
            </Link>
          )}

          {type === "vender" ? (
            <Link
              class={`btn non-active ${act.rent && "active"}`}
              onClick={() => handleClick("rent")}
            >
              <span>Renting history</span>
            </Link>
          ) : (
            ""
          )}
        </div>
      </section>
      {act.main ? (
        type === "admin" ? (
          <Admin />
        ) : type === "vender" ? (
          <Vender />
        ) : (
          <Rent />
        )
      ) : (
        ""
      )}
      {act.msg ? <Message /> : ""}
      {act.all ? <AdminAll handleClick={handleClick} /> : ""}
      {act.add ? <Addnew /> : ""}
      {act.rent ? <VenderRent handleClick={handleClick} /> : ""}
    </>
  );
};

export default SideBar;
