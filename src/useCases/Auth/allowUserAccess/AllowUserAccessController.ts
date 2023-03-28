import { Request, Response } from "express";
import httpStatus from "http-status";
import { AllowAccessService } from "./AllowUserAccessService.js";

export class AllowAccessController {
  constructor(private AllowAccessService: AllowAccessService) {}

  async handle(req: Request, res: Response) {
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
      await this.AllowAccessService.execute(token);
      res.sendStatus(httpStatus.OK);
    } catch (error: any) {
      if (error.name === "UnauthorizedError") {
        return res.sendStatus(401);
      }
      res.sendStatus(500);
    }
  }
}
