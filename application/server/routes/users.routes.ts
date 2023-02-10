import { Router, Request, Response } from "express";
import mysql from "mysql2/promise";
import { body, validationResult } from "express-validator";
import { dbConnectionString } from "../config/database.config";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    let connection = await mysql.createConnection(dbConnectionString!);
    let query = `
      SELECT * FROM users
		`;
    const [results, fields] = await connection.execute(query);

    await connection.end();
    res.status(200).json({ success: true, users: results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
export { router as userRouter };
