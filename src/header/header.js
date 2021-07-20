import React from "react";
import logo from "../image/logo.png";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  function handleLogout() {
    localStorage.removeItem("token");
    history.push("/");
  }
  return (
    <div className="header-bar">
      <div className="ul">
        <div className="search hide">
          <form>
            <input type="search" />
            <i className="fas fa-search"></i>
          </form>
        </div>
        <div className="logo">
          <Link to="/landing">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-bar">
          <div className="list">
            <ul>
              <li>
                <Link>
                  <i class="fas fa-bars"></i>
                </Link>
              </li>

              {!localStorage.getItem("token") ? (
                <>
                  <li>
                    <Link>
                      <i class="fas fa-shopping-cart"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">Login</Link>
                  </li>
                  <li>
                    <Link to="/SignUp">sign up</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout}>Logout</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
