import { Server, Socket } from "socket.io";


export const socket = ({ io }: { io: Server }) => {


    io.on("connection", (socket: Socket) => {
        console.log(`connect to SOCKET ${socket.id}`);
      
          // socket.emit('MSG_connect', 'Welcome to mini bridge')
      });
}