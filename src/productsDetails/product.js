import React from "react";
import image from "../image/new-one.jpg";

const Product = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow((show) => !show);
  };
  return (
    <>
      <section id="produt-detail">
        <div class="container">
          <div class="main">
            <figure>
              <img src={image} alt="" />
            </figure>

            <div class="detail">
              <strong>
                Rent a Aputure LS 600d Pro Light Storm Daylight LED Light
              </strong>

              <div class="price-box">
                <div class="price">
                  <small>85 for rent from</small>
                  <p>$50/day</p>
                </div>
                <button>
                  <a href="#related-products">View all</a>
                </button>
              </div>
              <p>
                An improvement over the original 600d, the LS 600d Pro Light
                Storm Daylight LED Light from Aputure offers expansive power,
                control options, and output comparable to a 1200W HMI, augmented
                by its 55° Hyper Reflector. The precision fixture has a solid
                {!show ? (
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
                    dominated by other daylight-balanced fixtures such as HMIs.
                    Besides power, control is a driving force in the design of
                    the 600d Pro. The light also has a myriad of wireless
                    control methods, such as the included 2.4 GHz remote, the
                    Sidus Link mobile app, and the built-in wireless DMX
                    control. It has four dimming curves: Linear, Exponential,
                    Log, and S-Curve, to ensure accuracy regardless of your
                    chosen brightness level. While you can make adjustments
                    locally on the fixture, you can also make them wirelessly at
                    a distance up to 328' via these methods - a real attribute
                    for lights mounted overhead or in hard to reach places. The
                    LS 600d Pro Light Storm Daylight LED is available in V-Mount
                    or Gold Mount.
                    <button id="myBtn" onClick={handleClick}>
                      {" "}
                      Read less
                    </button>
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
