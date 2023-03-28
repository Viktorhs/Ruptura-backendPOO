import { DeleteWeaponService } from "./DeleteWeaponService";
import httpStatus from "http-status";
import { Request, Response } from "express";

export class DeleteWeaponController {
  constructor(private DeleteWeaponService: DeleteWeaponService) {}

  async handle(req: Request, res: Response) {
    const { userId } = res.locals;
    const { sheetId, weaponId } = req.body;

    if (!sheetId || !weaponId) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }

    try {
      await this.DeleteWeaponService.execute(Number(sheetId), Number(weaponId), Number(userId));
      res.sendStatus(httpStatus.OK);
    } catch (error: any) {
      if (error.name === "UnauthorizedError") {
        return res.sendStatus(401);
      }
      res.sendStatus(500);
    }
  }
}
