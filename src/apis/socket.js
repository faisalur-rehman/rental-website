import io from "socket.io-client";
const APP_URL = "http://localhost:8000"; // or whatever the base URL
const socket = io(APP_URL, {
  auth: {
    token: localStorage.getItem("token"),
  }, // replace your token this is just for demo. By the way token is passed dynamically most probably you store token in localstorage or some other in memory db just replace this hard coded string with that token ...
});

export { socket };
