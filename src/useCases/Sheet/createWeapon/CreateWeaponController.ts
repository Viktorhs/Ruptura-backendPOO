import { CreateWeaponService } from "./CreateWeaponService.js";
import { Request, Response } from "express";
export class CreateWeaponController {
  constructor(private CreateWeaponService: CreateWeaponService) {}

  async handle(req: Request, res: Response) {
    const { sheetId } = req.params;
    const { userId } = res.locals;

    try {
      const result = await this.CreateWeaponService.execute(Number(sheetId), Number(userId));
      return res.status(201).send(result);
    } catch (error: any) {
      if (error.name === "UnauthorizedError") {
        return res.sendStatus(401);
      }
      res.sendStatus(500);
    }
  }
}
