import dotenv from "dotenv";
dotenv.config();

import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";

const router: Router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    if (!req.body.database) {
      throw { message: "Invalid request formatting." };
    }
    if (req.body.username !== "admin" || req.body.password !== "admin") {
      throw { message: "Invalid credentials." };
    }
    // do authentication here
    const token = jwt.sign({ db: req.body.database }, process.env.JWT_SECRET!);
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export { router as authRouter };
