import prisma from "../../database/db.js";
import { Account } from "../../models/Account.js";

export class CreateAccountRepository {
  async create({ nickname, email, password }: Account): Promise<void> {
    await prisma.users.create({
      data: {
        nickname,
        email,
        password,
      },
    });
  }
}
