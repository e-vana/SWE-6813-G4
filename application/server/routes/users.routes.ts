import dotenv from "dotenv";
dotenv.config();
import { Router, Request, Response } from "express";
import mysql from "mysql2/promise";
import { body, Result, validationResult } from "express-validator";
import { dbConnectionString } from "../config/database.config";
import { RowDataPacket, ResultSetHeader } from "mysql2";
import bcrypt from "bcrypt";
import { validateEmail } from "../utility/validateEmail";

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
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    let query = `
      SELECT id, email FROM users
		`;
    const [results, fields] = await connection.execute<User[]>(query);

    await connection.end();
    res.status(200).json({ success: true, users: results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    let query = `
      SELECT id, email FROM users WHERE id = ?
    `;
    const [results] = await connection.query<User[]>(query, req.params["id"]);
    await connection.end();
    res.status(200).json({ success: true, user: results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    let salt = bcrypt.genSaltSync(10);
    validateEmail(req.body.email);
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
    const [getUserResults] = await connection.query<User[]>(
      `SELECT id, email FROM users WHERE id = ?`,
      results.insertId
    );
    await connection.end();
    res.status(200).json({ success: true, user: getUserResults });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
router.patch("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
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
});
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
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
});
export { router as userRouter };
