import React, { useEffect } from "react";
import logo from "../image/logo.png";
import { Link, useHistory } from "react-router-dom";

let count = 0;
const Header = () => {
  const history = useHistory();
  // if (window.localStorage) {
  //   if (!localStorage.getItem("firstLoad")) {
  //     localStorage["firstLoad"] = true;
  //     window.location.reload();
  //   } else localStorage.removeItem("firstLoad");
  // }
  useEffect(() => {
    if (window.localStorage) {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;
        window.location.reload();
      } else localStorage.removeItem("firstLoad");
    }
    ++count;
    localStorage.setItem("count", count);
    if (+localStorage.getItem("count") < 2) {
      // window.location.reload();
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload();
  }
  return (
    <div className="header-bar">
      <div className="ul">
        {/* <div className="search hide">
          <form>
            <input type="search" />
            <i className="fas fa-search"></i>
          </form>
        </div> */}
        <div className="logo">
          <Link to="/landing">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-bar">
          <div className="list">
            <ul>
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
                  {localStorage.getItem("isAdmin") === "false" ? (
                    <>
                      <li>
                        <Link to="/dashboard/vender">Become Vendor</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/rent">Renting History</Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to="/dashboard/admin">Goto Dashboard</Link>
                    </li>
                  )}
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
