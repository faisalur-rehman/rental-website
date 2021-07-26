// import { useEffect, useState } from "react";
// import { socket } from "../apis/socket";

// export default function useRoomChat(roomId) {
//   const [questions, setQuestions] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     socket.emit("join-room", roomId);
//     socket.on("chat-history", (chatHistory) => {
//       console.log("chat history", chatHistory);
//     });

//     socket.on("join-room-error", (roomErr) => {
//       console.log("join room error", roomErr);
//     });

//     //eslint-disable-next-line
//   }, []);

//   return { questions, isLoading };
// }
