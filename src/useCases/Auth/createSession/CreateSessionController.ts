import { Request, Response } from "express";
import { Account } from "@/src//models/Account.js";
import httpStatus from "http-status";
import { CreateSessionService } from "./CreateSessionService.js";
import Joi from "joi";

const AccountSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export class CreateSessionController {
  constructor(private CreateSessionService: CreateSessionService) {}

  async handle(req: Request, res: Response) {
    const { email, password }: Omit<Account, "nickname"> = req.body;
    const isValid = AccountSchema.validate({
      email,
      password,
    });

    if (isValid.error) {
      res.send(httpStatus.UNPROCESSABLE_ENTITY);
    }

    try {
      const session = await this.CreateSessionService.execute({ email, password });
      return res.status(httpStatus.OK).send(session);
    } catch (error) {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
  }
}
