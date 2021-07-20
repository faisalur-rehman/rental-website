import React from "react";
import { client } from "../../variables";
import "./msg.css";

const Index = () => {
  return (
    <>
      <section class="message_window" id="message_window">
        <div class="container">
          <div class="message_main">
            <div class="client_list">
              <div class="ul_client_list">
                {client.map((cli) => {
                  return (
                    <div class="single_client">
                      <figure>
                        {" "}
                        <img src={cli.img} alt="" />
                      </figure>
                      <span>{cli.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="message_box">
              <div class="message_ul">
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
              </div>
              <form class="form-container">
                <input placeholder="Type message.." name="msg" required />
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
