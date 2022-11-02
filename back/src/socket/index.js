module.exports = function (socketIO) {
  socketIO.on("connection", function (socket) {
    console.log("소켓이 연결되었다!");
    socketIO.emit("RECEIVE_MESSAGE", { state: "ready" });
    socket.on("UPDATE_STATE", function () {
      socketIO.emit("RECEIVE_MESSAGE", { state: "updating" });
    });
    // setTimeout(() => {
    //   socketIO.emit("RECEIVE_MESSAGE", { state: "updating" });
    // }, 5000);
  });
  socketIO.on("disconnect", function (reason) {
    console.log(`소켓이 끊어졌다! ${reason}}`);
  });
};
