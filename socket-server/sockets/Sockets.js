module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("a computer connected");
    socket.on("disconnect", () => {
      console.log("a computer disconnected");
    });
    socket.on("send message", (message) => {
      io.emit("conversation", message);
      console.log(message);
    });
    setInterval(() => {
      socket.emit("date", new Date().toLocaleString().split(" ")[1]);
    }, 1000);
  });
};
