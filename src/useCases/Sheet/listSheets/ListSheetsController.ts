import httpStatus from "http-status";
import { ListSheetsService } from "./ListSheetsService";
import { Request, Response } from "express";

export class ListSheetsController {
  constructor(private ListSheetsService: ListSheetsService) {}

  async handle(req: Request, res: Response) {
    const { userId } = res.locals;

    try {
      const sheets = await this.ListSheetsService.execute(Number(userId));
      res.status(httpStatus.OK).send(sheets);
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST);
    }
  }
}
