import { useEffect, useState } from "react";

import { socket } from "../apis/socket";

export default function useSocketError() {
  const [error, setError] = useState();

  useEffect(() => {
    socket.on("exception", (errors) => {
      console.log("socket errors", errors);
      setError(errors);
    });
  }, []);

  return { error };
}
