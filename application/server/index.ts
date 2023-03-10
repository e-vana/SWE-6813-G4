import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { authRouter } from "./routes/auth.routes";
import { userRouter } from "./routes/users.routes";
import { gamesRouter } from "./routes/games.routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/games", gamesRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
