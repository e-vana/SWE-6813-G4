import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth.routes";
import { userRouter } from "./routes/users.routes";

import cors from "cors";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
