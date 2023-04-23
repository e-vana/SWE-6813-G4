import express, { Express, Response, Request } from "express";
import cors from "cors";
import { authRouter } from "./routes/auth.routes";
import { userRouter } from "./routes/users.routes";
import { gamesRouter } from "./routes/games.routes";
import { lobbiesRouter } from "./routes/lobbies.routes";

export const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.options("*", cors());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/games", gamesRouter);
app.use("/api/lobbies", lobbiesRouter);
