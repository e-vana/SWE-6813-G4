import dotenv from "dotenv";
dotenv.config();
import { Router, Request, Response } from "express";
import mysql from "mysql2/promise";
import { body, Result, validationResult } from "express-validator";
import { dbConnectionString } from "../config/database.config";
import { RowDataPacket, ResultSetHeader } from "mysql2";
import bcrypt from "bcrypt";
import decodeToken from "../middleware/token.middleware";
import jwt from "jsonwebtoken";

import { sanitizeEmail } from "../utility/sanitizeEmail";
import { sanitizePassword } from "../utility/sanitizePassword";

const router: Router = Router();

// export interface User extends ResultSetHeader {
//   id?: number;
//   email: string;
//   password: string;
// }
export interface User extends RowDataPacket {
  id?: number;
  email: string;
  password: string;
}
router.get(
  "/",
  decodeToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      let connection = await mysql.createConnection(dbConnectionString!);
      let query = `
      SELECT id, email, status FROM users
		`;
      const [results, fields] = await connection.execute<User[]>(query);
      await connection.end();
      res.status(200).json({ success: true, users: results });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error });
    }
  }
);
router.get(
  "/:id",
  decodeToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      let connection = await mysql.createConnection(dbConnectionString!);
      let query = `
      SELECT id, email, status FROM users WHERE id = ?
    `;
      const [results] = await connection.query<User[]>(query, req.params["id"]);
      await connection.end();
      res.status(200).json({ success: true, user: results });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error });
    }
  }
);
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    let salt = bcrypt.genSaltSync(10);
    req.body.email = sanitizeEmail(req.body.email);
    req.body.password = sanitizePassword(req.body.password);
    const [checkUserExists] = await connection.query<User[]>(
      `SELECT id, email FROM users WHERE email = ?`,
      req.body.email
    );
    if (checkUserExists.length >= 1) {
      throw { message: "User is already registered." };
    }
    req.body.password = await bcrypt.hashSync(req.body.password, salt);
    const [results] = await connection.query<ResultSetHeader>(
      `INSERT INTO users SET ?`,
      req.body
    );
    const token = jwt.sign({ id: results.insertId }, process.env.JWT_SECRET!);
    await connection.end();
    res.status(200).json({ success: true, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
router.post(
  "/status",
  decodeToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      let connection = await mysql.createConnection(dbConnectionString!);
      if (req.body.status >= 3) {
        throw { message: "Invalid status code, 0-3 are valid." };
      }
      let userId = req.userId;
      const [results, fields] = await connection.query(
        `UPDATE users SET status = ? WHERE id = ?`,
        [req.body.status, userId]
      );
      await connection.end();
      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error });
    }
  }
);
router.post(
  "/join-matchmaking",
  decodeToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      console.log(req.body);
      let connection = await mysql.createConnection(dbConnectionString!);
      //set all other entiries from this user as inactive
      const [results, fields] = await connection.query(
        `INSERT matchmaking_queue SET ?`,
        [req.body]
      );
      await connection.end();
      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error });
    }
  }
);
router.post(
  "/cancel-matchmaking",
  decodeToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      let connection = await mysql.createConnection(dbConnectionString!);
      //set all other entiries from this user as inactive
      const [results, fields] = await connection.query(
        `UPDATE matchmaking_queue SET active = 0 WHERE user_id = ?`,
        [req.body.userId]
      );
      await connection.end();
      res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error });
    }
  }
);
router.post(
  "/:id",
  decodeToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      let connection = await mysql.createConnection(dbConnectionString!);
      if (req.body.password) {
        let salt = bcrypt.genSaltSync(10);
        req.body.password = await bcrypt.hashSync(req.body.password, salt);
      }
      let { id, ...updateFields } = req.body;
      const [results, fields] = await connection.query(
        `UPDATE users SET ? WHERE id = ?`,
        [updateFields, req.params["id"]]
      );
      await connection.end();
      res.status(200).json({ success: true, user: results });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error });
    }
  }
);
router.delete(
  "/:id",
  decodeToken,
  async (req: Request, res: Response): Promise<void> => {
    try {
      let connection = await mysql.createConnection(dbConnectionString!);
      const [results, fields] = await connection.query(
        `DELETE FROM users WHERE id = ?`,
        [req.params["id"]]
      );
      await connection.end();
      res.status(200).json({ success: true, user: results });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error });
    }
  }
);

export { router as userRouter };
