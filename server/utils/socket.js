import { Server } from 'socket.io';

const userSocketMap = {};

let io;

export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: [process.env.FRONTEND_URL || "http://localhost:5173"],
            credentials: true
        },
    });

    io.on("connection", (socket) => {
        const userId = socket.handshake.query.userId;

        if (userId && userId !== "undefined") {
            userSocketMap[userId] = socket.id;
        }

        io.emit("getOnlineUsers", Object.keys(userSocketMap));

        socket.on('disconnect', () => {
            if (userId && userSocketMap[userId]) {
                delete userSocketMap[userId];
            }
            io.emit("getOnlineUsers", Object.keys(userSocketMap));  
        });
    });
}

export function getReceiverSocketId(userId){
    return userSocketMap[userId];
}

export {io};