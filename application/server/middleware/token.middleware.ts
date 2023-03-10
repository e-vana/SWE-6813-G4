import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

declare global {
  namespace Express {
    interface Request {
      // tokenDb: string | undefined
      userId: number | undefined;
    }
  }
}
interface AuthPayload {
  id: number;
}

export const decodeToken = async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    console.log("Middleware fired");
    if (!req.headers.authorization) {
      throw { message: "You do not have permission to access this resource." };
    }
    if (req.headers.authorization) {
      let tokenBearer = req.headers.authorization;
      let token = tokenBearer.split(" ")[1];
      let tokenIsValid = await jwt.verify(token, process.env.JWT_SECRET!);
      if (!tokenIsValid) {
        throw {
          message: "You do not have permission to access this resource.",
        };
      }
      let decodedToken = jwt_decode<AuthPayload>(token);
      req.userId = decodedToken.id;
    }
    next();
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

export default decodeToken;
