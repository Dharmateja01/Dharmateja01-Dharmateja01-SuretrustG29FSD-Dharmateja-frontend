import {io } from 'socket.io-client'
export const socket = io(
  "https://dharmateja01-suretrustg29fsd-dharmateja-3n0p.onrender.com/",
  {
    transports: ["polling", "websocket"],
    autoConnect: true,
  }
);