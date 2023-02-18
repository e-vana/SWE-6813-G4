import dotenv from "dotenv";
dotenv.config();

import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";
import { dbConnectionString } from "../config/database.config";
import bcrypt from "bcrypt";
import { User } from "./users.routes";

const router: Router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    let query = `
      SELECT * FROM users WHERE email = ?
    `;
    const [results] = await connection.query<User[]>(query, req.body.email);
    console.log(results[0].password);
    let t = await bcrypt.compareSync(req.body.password, results[0].password);
    const token = jwt.sign({ uid: results[0].id }, process.env.JWT_SECRET!);
    await connection.end();
    res.status(200).json({ success: true, token: token });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
});

export { router as authRouter };
