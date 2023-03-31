const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(__dirname+"/public_1/board.html")
  })
app.listen(3002, () => {
   console.log(`Example app listening on port 3002`)
})



// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3001",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("get_message", (from,data) => {
//     console.log(from,data)
//     // socket.broadcast.emit("receive_message", from,data);
//     io.emit("receive_message", from,data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
// });




// server.listen(3001, () => {
//   console.log("SERVER RUNNING");
// });