import React, { useEffect, useState } from "react";
import { socket } from "../../apis/socket";
// import { client } from "../../variables";
import "./msg.css";

const Index = () => {
  const [rooms, setRooms] = useState([]);
  const [message, setMessage] = useState("");
  const [roomId, setRoomId] = useState("");
  const [chatHistory, setChatHistory] = useState();
  useEffect(() => {
    socket.emit("all-rooms", (allRooms) => {
      console.log("all rooms", allRooms);
      setRooms(allRooms);
    });
  }, []);
  function handleClick(id) {
    setRoomId(id);
    socket.emit("chat-history", id, (chatHistory) => {
      console.log("this is chat history", chatHistory);
      setChatHistory(chatHistory);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("message-from-client", {
      msg: message,
      roomId: roomId,
    });

    socket.on("message-from-server", (newMsg) => {
      console.log("new message from server", newMsg);
      setChatHistory((prev) => ({ ...prev, chat: [...prev.chat, newMsg] }));
    });
    setMessage("");
  }

  return (
    <>
      <section class="message_window" id="message_window">
        <div class="container">
          <div class="message_main">
            <div class="client_list">
              <div class="ul_client_list">
                {rooms.length > 0 &&
                  rooms.map((room) => {
                    return (
                      <div
                        className="single_client"
                        onClick={() => handleClick(room.id)}
                        style={{ display: "flex" }}
                      >
                        <figure>
                          <i className="fas fa-user"></i>
                        </figure>
                        <span>{room.id}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div class="message_box">
              <div class="message_ul">
                {chatHistory &&
                  chatHistory.chat.map((chat) => (
                    <div className="chat">
                      <div className="user-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="chat-detail">
                        <p className="username">
                          {chatHistory[chat.user].name}
                        </p>
                        <p>{chat.message}</p>
                      </div>
                    </div>
                  ))}
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
