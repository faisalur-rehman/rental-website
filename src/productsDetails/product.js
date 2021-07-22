import React, { useEffect } from "react";
import useApi from "../hooks/useApi";
import image from "../image/new-one.jpg";
import * as rentalApi from "../apis/schedule";
import { useParams } from "react-router-dom";
const Product = () => {
  const singleProduct = useApi(rentalApi.getSingleProduct);
  const { id } = useParams();
  console.log(("id", id));
  useEffect(() => {
    async function fetchProduct() {
      await singleProduct.request(id);
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);

  console.log("single", singleProduct.data);

  return (
    <>
      <section id="produt-detail">
        <div class="container">
          {singleProduct.data && (
            <div class="main">
              <figure>
                <img src={image} alt="" />
              </figure>

              <div class="detail">
                <strong>{singleProduct.data.product.companyName}</strong>

                <div class="price-box">
                  <div class="price">
                    <small>rent from</small>
                    <p>${singleProduct.data.product.pricePerDay}/day</p>
                  </div>
                  {/* <button>
                    <a href="#related-products">View all</a>
                  </button> */}
                </div>
                <p>
                  {singleProduct.data.product.description}
                  {/* {!show ? (
                    <span>
                      ...
                      <button id="myBtn" onClick={handleClick}>
                        Read more
                      </button>
                    </span>
                  ) : (
                    <span>
                      5600K color temperature with a high CRI/TLCI rating of 96
                      that is great for location shooting outdoors, or in areas
                      dominated by other daylight-balanced fixtures such as
                      HMIs. Besides power, control is a driving force in the
                      design of the 600d Pro. The light also has a myriad of
                      wireless control methods, such as the included 2.4 GHz
                      remote, the Sidus Link mobile app, and the built-in
                      wireless DMX control. It has four dimming curves: Linear,
                      Exponential, Log, and S-Curve, to ensure accuracy
                      regardless of your chosen brightness level. While you can
                      make adjustments locally on the fixture, you can also make
                      them wirelessly at a distance up to 328' via these methods
                      - a real attribute for lights mounted overhead or in hard
                      to reach places. The LS 600d Pro Light Storm Daylight LED
                      is available in V-Mount or Gold Mount.
                      <button id="myBtn" onClick={handleClick}>
                        {" "}
                        Read less
                      </button>
                    </span>
                  )} */}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
