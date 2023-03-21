import httpStatus from "http-status";
import { CreateSheetService } from "./CreateSheetService";
import { Request, Response } from "express";

export class CreateSheetController {
  constructor(private CreateSheetService: CreateSheetService) {}

  async handle(req: Request, res: Response) {
    const { userId } = res.locals;

    try {
      const sheetId = await this.CreateSheetService.execute(Number(userId));
      res.status(httpStatus.CREATED).send(sheetId);
    } catch (error: any) {
      if (error.name === "UnauthorizedError") {
        return res.status(httpStatus.UNAUTHORIZED).send(error.message);
      }
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
