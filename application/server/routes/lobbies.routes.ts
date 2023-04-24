import dotenv from "dotenv";
dotenv.config();
import { Router, Request, Response } from "express";
import mysql from "mysql2/promise";
import { dbConnectionString } from "../config/database.config";

const router: Router = Router();

router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    let query = `SELECT mlmq.*, mq.*, u.email FROM matchmaking_lobby_matchmaking_queue mlmq JOIN matchmaking_queue mq ON mlmq.matchmaking_queue_id = mq.session_id JOIN users u ON mq.user_id = u.id WHERE lobby_id = ?`;
    const [results] = await connection.query(query, [req.params.id]);

    await connection.end();
    res.status(200).json({ success: true, lobbies: results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});

export { router as lobbiesRouter };
