import dotenv from "dotenv";
dotenv.config();
import { Router, Request, Response } from "express";
import mysql from "mysql2/promise";
import { body, validationResult } from "express-validator";
import { dbConnectionString } from "../config/database.config";
import { RowDataPacket, ResultSetHeader, OkPacket } from "mysql2";
import bcrypt from "bcrypt";

const router: Router = Router();
export interface Game extends RowDataPacket {
  id?: number;
  title: string;
}

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    let query = `
      SELECT * FROM games
		`;
    const [results, fields] = await connection.execute<Game[]>(query);

    await connection.end();
    res.status(200).json({ success: true, games: results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    let query = `
      SELECT * FROM games WHERE id = ?
    `;
    const [results] = await connection.query<Game[]>(query, req.params["id"]);
    await connection.end();
    res.status(200).json({ success: true, game: results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);

    const [results] = await connection.query<OkPacket>(
      `INSERT INTO games SET ?`,
      req.body
    );
    const [getGameResult] = await connection.query<Game[]>(
      `SELECT * FROM games WHERE id = ?`,
      results.insertId
    );
    await connection.end();
    res.status(200).json({ success: true, game: getGameResult });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
router.patch("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    let { id, ...updateFields } = req.body;
    const [results, fields] = await connection.query<OkPacket>(
      `UPDATE games SET ? WHERE id = ?`,
      [updateFields, req.params["id"]]
    );
    const [getGameResult] = await connection.query<Game[]>(
      `SELECT * FROM games WHERE id = ?`,
      req.params["id"]
    );
    await connection.end();
    res.status(200).json({ success: true, game: getGameResult });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    const [results, fields] = await connection.query(
      `DELETE FROM games WHERE id = ?`,
      [req.params["id"]]
    );
    await connection.end();
    res.status(200).json({ success: true, game: results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
export { router as gamesRouter };
