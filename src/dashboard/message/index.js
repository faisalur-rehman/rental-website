import React, { useEffect, useState } from "react";
import { socket } from "../../apis/socket";
// import { client } from "../../variables";
import "./msg.css";

const Index = () => {
  const [rooms, setRooms] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    socket.emit("all-rooms", (allRooms) => {
      console.log("all rooms", allRooms);
      setRooms(allRooms);
    });
  }, []);
  function handleClick(index) {
    console.log("index", index);
    socket.emit("chat-history", index, (chatHistory) => {
      console.log("this is chat history", chatHistory);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <section class="message_window" id="message_window">
        <div class="container">
          <div class="message_main">
            <div class="client_list">
              <div class="ul_client_list">
                {rooms.length > 0 &&
                  rooms.map((cli) => {
                    return (
                      <div
                        className="single_client"
                        onClick={() => handleClick(cli.id)}
                        style={{ display: "flex" }}
                      >
                        <figure>
                          <i className="fas fa-user"></i>
                        </figure>
                        <span>{cli.opposedUser}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div class="message_box">
              <div class="message_ul">
                {/* <div class="receive">
                  <input placeholder="received message.." name="msg" readonly />
                </div>
                <div class="send">
                  <input
                    placeholder="send message.."
                    name="msg"
                    readonly
                  ></input>
                </div>
                <div class="receive">
                  <input placeholder="received message.." name="msg" readonly />
                </div>
                <div class="send">
                  <input
                    placeholder="send message.."
                    name="msg"
                    readonly
                  ></input>
                </div>
                <div class="receive">
                  <input placeholder="received message.." name="msg" readonly />
                </div>
                <div class="send">
                  <input
                    placeholder="send message.."
                    name="msg"
                    readonly
                  ></input>
                </div>
                <div class="receive">
                  <input placeholder="received message.." name="msg" readonly />
                </div>
                <div class="send">
                  <input
                    placeholder="send message.."
                    name="msg"
                    readonly
                  ></input>
                </div>
                <div class="receive">
                  <input placeholder="received message.." name="msg" readonly />
                </div>
                <div class="send">
                  <input
                    placeholder="send message.."
                    name="msg"
                    readonly
                  ></input>
                </div>
                <div class="receive">
                  <input placeholder="received message.." name="msg" readonly />
                </div>
                <div class="send">
                  <input
                    placeholder="send message.."
                    name="msg"
                    readonly
                  ></input>
                </div> */}
              </div>
              <form onSubmit={handleSubmit} class="form-container">
                <input
                  placeholder="Type message.."
                  value={message}
                  onChange={({ target }) => setMessage(target.value)}
                  name="msg"
                  required
                />
                <button type="submit" class="btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
