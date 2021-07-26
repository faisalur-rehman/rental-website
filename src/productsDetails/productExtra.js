import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../image/new-one.jpg";
import { socket } from "../apis/socket";
import useSocketError from "../hooks/useSocketError";
import * as rentalApi from "../apis/schedule";
import useApi from "../hooks/useApi";
// import useRoomChat from "../hooks/useRoomChat";

const ProductExtra = ({ productId, userId }) => {
  const singleProduct = useApi(rentalApi.getSingleProduct);

  // const { id } = useParams();
  // console.log(("id", id));
  useEffect(() => {
    async function fetchProduct() {
      await singleProduct.request(productId);
    }
    fetchProduct();
    //eslint-disable-next-line
  }, []);
  console.log("single", singleProduct.data);
  useSocketError();
  async function handleClick() {
    console.log("user token", window.localStorage.getItem("token"));

    socket.emit("create-room", { user: userId }, (newlyCreatedRoom) => {
      console.log("socket", newlyCreatedRoom);
      socket.emit("join-room", newlyCreatedRoom.id, (data) => {
        console.log("join room socket", data);
      });
    });

    const createRoom = () => {
      return new Promise((res, _) => {
        socket.emit("create-room", { user: userId }, (data) => {
          res(data);
        });
      });
    };

    const room = await createRoom();
    socket.emit("join-room", room.id, (data) => {
      console.log(data);
    });
  }

  return (
    <>
      <section id="produt-detail-extra">
        <div class="container">
          <div class="main">
            <div class="author-info">
              <strong>Seller Info</strong>
              <div class="author-detail">
                <figure>
                  <img src={image} alt="" />
                  <figcaption>
                    <span>Center for the Cinematic Arts, Inc.</span>
                  </figcaption>
                </figure>
                <button onClick={handleClick}>Message</button>
              </div>
            </div>
            <div class="cart-part">
              <div style={{ display: "flex", marginBottom: 10 }}>
                {/* <div class="search-icon">
                  <input
                    class="location"
                    type="date"
                    placeholder="Start date"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                  ></input>
                </div>
                <div class="search-icon">
                  <input
                    class="location"
                    type="date"
                    placeholder="End date"
                    onfocus="(this.type='date')"
                    onblur="(this.type='text')"
                  ></input>
                </div> */}
              </div>
              <div>
                <div class="cart-box">
                  {/* <Link className="aa" to="/ProductDetails">
                    Add to cart
                  </Link> */}
                  <Link
                    className="aa"
                    to={`/ProductDetails/CheckOut/${productId}`}
                  >
                    Check Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductExtra;
