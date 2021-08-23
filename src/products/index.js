import React, { useEffect } from "react";
import Products from "./products";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { products } from "../variables";
import * as rentalApi from "../apis/schedule";
import useApi from "../hooks/useApi";

// window.location.reload();
const Index = ({ searchedProducts }) => {
  const allProducts = useApi(rentalApi.adminAllProducts);
  useEffect(() => {
    async function fetchProducts() {
      try {
        await allProducts.request();
      } catch (_) {
        console.log("producrs error", allProducts.error);
      }
    }
    fetchProducts();
    //eslint-disable-next-line
  }, []);
  console.log("products", allProducts.data);
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
      {searchedProducts && (
        <div className="our-latest-product" id="latest-product">
          <div className="container">
            <p>Searched Products</p>
            <div className="list">
              <ul className="sliderTwo">
                <OwlCarousel
                  className="container-fluid owl-theme"
                  // items={3}
                  loop={true}
                  autoplay={true}
                  nav
                  responsive={state}
                >
                  {searchedProducts.map((pro) => {
                    return <Products {...pro} key={pro._id} />;
                  })}
                </OwlCarousel>
              </ul>
            </div>
          </div>
        </div>
      )}
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
                      // items={3}
                      loop={true}
                      autoplay={true}
                      nav
                      responsive={{
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
                          items: products.length >= 4 ? 4 : products.length + 1,
                        },
                      }}
                    >
                      {allProducts.data &&
                        allProducts.data.product.map((pro) => {
                          return <Products {...pro} key={pro._id} />;
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
                      {/* {featured.map((pro, index) => {
                        return <Products {...pro} key={index} />;
                      })} */}
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
