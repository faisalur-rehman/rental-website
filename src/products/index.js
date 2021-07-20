import React from "react";
import Products from "./products";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { products, latest, featured } from "../variables";

const Index = () => {
  const [state] = React.useState({
    0: {
      items: 1,
    },
    550: {
      items: 2,
    },
    750: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  });
  return (
    <>
      {products.map((product) => {
        return (
          <div className="our-latest-product" id="latest-product">
            <div className="container">
              <h4>{product}</h4>
              <p>
                Check our latest arrivals and <br />
                start shopping
              </p>
              <div class="list">
                <ul class="sliderTwo">
                  {product === "Our Latest Products" ? (
                    <OwlCarousel
                      className="container-fluid owl-theme"
                      items={4}
                      loop={true}
                      autoplay={true}
                      nav
                      responsive={state}
                    >
                      {latest.map((pro, index) => {
                        return <Products {...pro} key={index} />;
                      })}
                    </OwlCarousel>
                  ) : (
                    <OwlCarousel
                      className="container-fluid owl-theme"
                      items={4}
                      loop={true}
                      autoplay={true}
                      nav
                      responsive={state}
                    >
                      {featured.map((pro, index) => {
                        return <Products {...pro} key={index} />;
                      })}
                    </OwlCarousel>
                  )}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Index;
