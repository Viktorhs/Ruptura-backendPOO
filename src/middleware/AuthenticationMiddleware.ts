import prisma from "../database/db.js";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import Jwt from "jsonwebtoken";

export class AuthenticateToken {
  constructor() {}

  async authenticate(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res.status(httpStatus.UNAUTHORIZED).send({
        name: "UnauthorizedError",
        message: "You must be signed in to continue",
      });
    }

    const token = authHeader?.split(" ")[1];
    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).send({
        name: "UnauthorizedError",
        message: "You must be signed in to continue",
      });
    }

    try {
      const { userId } = Jwt.verify(token!, process.env.JWT_SECRET!) as JWTPayload;

      const session = await prisma.sessions.findFirst({
        where: {
          token,
        },
      });

      if (!session) {
        return res.status(httpStatus.UNAUTHORIZED).send({
          name: "UnauthorizedError",
          message: "You must be signed in to continue",
        });
      }

      res.locals.userId = userId;
      return next();
    } catch (error) {
      res.status(httpStatus.UNAUTHORIZED).send({
        name: "UnauthorizedError",
        message: "You must be signed in to continue",
      });
    }
  }
}

type JWTPayload = {
  userId: number;
};
