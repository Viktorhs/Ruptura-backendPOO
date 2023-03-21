import { CreateAccountService } from "./CreateAccountService";
import { Request, Response } from "express";
import { Account } from "../../../models/Account";
import httpStatus from "http-status";
import Joi from "joi";

const AccountSchema = Joi.object({
  nickname: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export class CreateAccountController {
  constructor(private CreateAccountService: CreateAccountService) {}

  async handle(req: Request, res: Response) {
    const { nickname, email, password }: Account = req.body;
    const isValid = AccountSchema.validate({
      nickname,
      email,
      password,
    });

    if (isValid.error) {
      return res.send(httpStatus.UNPROCESSABLE_ENTITY);
    }

    try {
      await this.CreateAccountService.execute({ nickname, email, password });
      res.sendStatus(httpStatus.CREATED);
    } catch (error: any) {
      if (error.name === "DuplicatedEmailError") {
        return res.status(httpStatus.CONFLICT).send(error);
      }
      return res.status(httpStatus.SERVICE_UNAVAILABLE).send(error);
    }
  }
}
