import { PrismaClient } from "@prisma/client";
import http from "http";
import { server } from "./express";
export const prisma = new PrismaClient();
const PORT = process.env.PORT || 8085;

const startServer = async () => {
  const app = server();
  http.createServer(app).listen(PORT, () => {
    console.log("Backend is running.. " + PORT);
  });
};
startServer();
