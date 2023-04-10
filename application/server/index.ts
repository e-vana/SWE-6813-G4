import dotenv from "dotenv";
import http from 'http';
import { app } from "./app";
import { applicationSocket } from "./utility/websocket";

dotenv.config();

const port = process.env.PORT;
const server = http.createServer(app);
applicationSocket(server);
server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

