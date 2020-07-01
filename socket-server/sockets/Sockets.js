module.exports = (io, users) => {
  io.on("connection", (socket) => {
    let found = false;
    if (users.length !== 0)
      found = users.some((user) =>
        user.socketId === socket.id ? true : false
      );
    if (!found) {
      users.push({ socketId: socket.id, username: "" });
      console.log("a computer connected");
    }
    socket.on("register", (username) => {
      const oldUsers = [...users];
      const index = oldUsers.findIndex((user) => user.socketId === socket.id);
      const newUser = { username, socketId: oldUsers[index].socketId };
      users.splice(index, 1, newUser);

      io.emit("connection status", {
        socketId: socket.id,
        id: Math.random(),
        type: "connection",
        time: new Date().toLocaleTimeString(),
        username,
      });
    });

    socket.on("disconnect", () => {
      if (users.length === 0) return;
      if (!users.filter((user) => user.socketId === socket.id)[0].username)
        return;
      console.log(
        "disconnect",
        users.filter((user) => user.socketId === socket.id)[0].username
      );
      io.emit("connection status", {
        socketId: socket.id,
        type: "connection",
        id: Math.random(),
        message:
          users.filter((user) => user.socketId === socket.id)[0].username +
          " left",
        time: new Date().toLocaleTimeString(),
      });
      users.splice(socket.id, 1);
      io.emit("members", users);
      console.log("a computer disconnected");
    });

    socket.on("send message", (message) => {
      io.emit("conversation", message);
    });

    io.emit("members", users);

    socket.on("typing", (username) => {
      socket.broadcast.emit("typing", {
        username,
        isTyping: true,
      });
    });

    setInterval(() => {
      socket.emit("date", new Date().toLocaleString().split(" ")[1]);
    }, 1000);
  });
};
