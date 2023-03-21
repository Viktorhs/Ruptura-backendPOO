import httpStatus from "http-status";
import { DeleteSheetService } from "./DeleteSheetService";
import { Request, Response } from "express";
export class DeleteSheetController {
  constructor(private DeleteSheetService: DeleteSheetService) {}

  async handle(req: Request, res: Response) {
    const { userId } = res.locals;
    const { sheetId } = req.params;

    try {
      await this.DeleteSheetService.execute(Number(userId), Number(sheetId));
      res.status(httpStatus.OK);
    } catch (error: any) {
      if (error.name === "UnauthorizedError") {
        return res.status(httpStatus.UNAUTHORIZED);
      }
      res.status(httpStatus.BAD_REQUEST);
    }
  }
}
