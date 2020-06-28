const app = require("express")();
const socketIO = require("socket.io");

app.use((req, _, next) => {
  req.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

const server = app.listen(5000, () => {
  console.log("Serving at http://localhost:5000");
});

const io = socketIO(server);
require("./sockets/Sockets")(io);
