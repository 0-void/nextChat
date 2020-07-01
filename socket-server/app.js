const app = require("express")();
const socketIO = require("socket.io");

const users = [];
app.use((req, _, next) => {
  req.header("Access-Control-Allow-Origin", process.env.CORS_ORIGIN);
  next();
});

app.get("/remove", (req, res) => {
  users.splice(0, users.length);
  res.json({ users: users.length });
});

const server = app.listen(process.env.PORT, () => {
  console.log("Serving at http://localhost:5000");
});

const io = socketIO(server);
require("./sockets/Sockets")(io, users);
