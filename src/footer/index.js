import React from "react";
import img from "../image/footer.png";
import logo from "../image/logo.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="footer">
        <div className="section1">
          <div className="container">
            <div className="main">
              <div className="address">
                <figure>
                  <img src={logo} alt="" />
                </figure>
                <div className="address-data">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>{" "}
                      <Link>4771 Harper Street Madisonville, KY 42431</Link>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <i className="fas fa-phone-alt"></i>{" "}
                      <Link>(012) 345 - 6789</Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <Link>info@gmail.com</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="get-in-touch">
                <h3>Get To Know Us</h3>
                <div className="alternative">
                  <ul>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>About Us</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Blog</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Newsletter</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>{" "}
                      <Link>Careers</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="support">
                <h3>Support</h3>
                <div className="alternative">
                  <ul>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Rental Agreement</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Help</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Our Process</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>{" "}
                      <Link>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="services">
                <h3>Services</h3>
                <div className="alternative">
                  <ul>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Gift Certificates</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Lensrentals HD</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Keeper</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>{" "}
                      <Link>Lenscap+</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Refer a Friend</Link>
                    </li>
                    <li>
                      <i className="fas fa-long-arrow-alt-right"></i>
                      <Link>Affiliate</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section_two">
            <img src={img} alt="" />
            <div className="container">
              <div className="social_icon">
                <Link>
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link>
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link>
                  <i className="fab fa-invision"></i>
                </Link>
                <Link>
                  <i className="fab fa-google-plus-g"></i>
                </Link>
                <Link>
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
              <small>© 2021 copy right reserved.</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
