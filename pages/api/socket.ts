import { F122UDP, PacketLapData, PacketSessionData } from "f1-22-udp";
import { Server } from "socket.io";
import { NextApiRequest, NextApiResponse } from "next";

const SocketHandler = (req: NextApiRequest, res: NextApiResponse) => {
  // @ts-ignore
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    // @ts-ignore
    const io: Server = new Server(res.socket.server);
    // @ts-ignore
    res.socket.server.io = io;
    const f122udp = new F122UDP();
    f122udp.start();
    io.on("connection", (socket) => {
      f122udp.on("lapData", (data: PacketLapData) => {
        socket.emit("lapDataUpdate", data);
      });
      f122udp.on("session", (data: PacketSessionData) => {
        socket.emit("sessionDataUpdate", data);
      });
    });
  }
  res.end();
};

export default SocketHandler;
