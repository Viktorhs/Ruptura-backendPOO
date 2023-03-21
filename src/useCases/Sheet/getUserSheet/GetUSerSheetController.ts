import httpStatus from "http-status";
import { GetUserSheetService } from "./GetUserSheetService";
import { Request, Response } from "express";

export class GetUserSheetController {
  constructor(private GetUserSheetService: GetUserSheetService) {}

  async handle(req: Request, res: Response) {
    const { userId } = res.locals;
    const { sheetId } = req.params;

    try {
      const sheet = await this.GetUserSheetService.execute(Number(userId), Number(sheetId));
      res.status(httpStatus.OK).send(sheet);
    } catch (error) {
      res.sendStatus(httpStatus.BAD_REQUEST);
    }
  }
}
