import { useEffect, useState } from "react";
import io from "socket.io-client";

export const useSocket = (socketUrl) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(
      io(socketUrl, {
        forceNew: true,
      })
    );
    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  return [socket];
};
