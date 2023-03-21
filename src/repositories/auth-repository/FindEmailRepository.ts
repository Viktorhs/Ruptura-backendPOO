import prisma from "../../database/db.js";
import { Account } from "../../models/Account.js";

export class FindEmailRepository {
  async getUnique(email: string): Promise<Account | null> {
    return prisma.users.findUnique({
      where: {
        email,
      },
    });
  }
  async getNickname(nickname: string): Promise<Account | null> {
    return prisma.users.findUnique({
      where: {
        nickname,
      },
    });
  }
}
