const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const socketIo = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const socket = require("./src/socket");
const port = 4001;

app.use(cors({ origin: "http://localhost:3000" })); // cosr 미들웨어 사용
socket(socketIo);

server.listen(port, () => {
  console.log(
    `##### server is running on http://localhost:4001. ${new Date().toLocaleString()} #####`
  );
});
