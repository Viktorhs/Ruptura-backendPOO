import { DeleteDefenseService } from "./DeleteDefenseService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export class DeleteDefenseController {
  constructor(private DeleteDefenseService: DeleteDefenseService) {}

  async handle(req: Request, res: Response) {
    const { userId } = res.locals;
    const { sheetId, defenseId } = req.body;

    if (!sheetId || !defenseId) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    try {
      await this.DeleteDefenseService.execute(Number(sheetId), Number(defenseId), Number(userId));
      res.sendStatus(httpStatus.OK);
    } catch (error: any) {
      if (error.name === "UnauthorizedError") {
        return res.sendStatus(401);
      }
      res.sendStatus(500);
    }
  }
}
