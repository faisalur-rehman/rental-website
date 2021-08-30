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
      console.log("all rooms", allRooms.allROoms);
      setRooms(allRooms.allROoms);
    });
  }, []);
  useEffect(() => {
    socket.on("msg-from-server", (newMsg) => {
      console.log("new message from server", newMsg);
      setChatHistory((prev) => ({
        ...prev,
        chatHistory: [...prev.chatHistory, { ...newMsg }],
      }));
    });
  }, []);
  function handleClick(roomId) {
    console.log("room id", roomId);
    setRoomId(roomId);
    socket.emit("chat-history", { roomId }, (chatHistory) => {
      console.log("this is chat history", chatHistory);
      setChatHistory(chatHistory);
    });
  }

  function handleSubmit(e) {
    console.log("submit data");
    e.preventDefault();
    socket.emit("msg-from-client", {
      message: message,
      roomId: roomId,
    });
    // socket.emit("chat-history", { roomId }, (chatHistory) => {
    //   console.log("this is chat history", chatHistory);
    //   setChatHistory({ ...chatHistory });
    // });

    // socket.on("msg-from-server", (newMsg) => {
    //   setChatHistory((prev) => ({
    //     ...prev,
    //     chatHistory: [...prev.chatHistory, { ...newMsg }],
    //   }));
    // });
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
                        onClick={() => handleClick(room._id)}
                        style={{ display: "flex" }}
                      >
                        <figure>
                          <i className="fas fa-user"></i>
                        </figure>
                        <span>{room.opposedUserId.name}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div class="message_box">
              <div class="message_ul">
                {chatHistory &&
                  chatHistory.chatHistory.map((chat) => (
                    <div className="chat">
                      <div className="user-icon">
                        <i className="fas fa-user"></i>
                      </div>
                      <div className="chat-detail">
                        <p className="username">
                          {chatHistory[chat.userId].name}
                        </p>
                        <p>{chat.message}</p>
                      </div>
                    </div>
                  ))}
              </div>
              {roomId && (
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
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
