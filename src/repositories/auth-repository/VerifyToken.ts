import { Session } from "@/src/models/Session.js";
import prisma from "../../database/db.js";

export class VerifyToken {
  async getUnique(token: string): Promise<Session | null> {
    return prisma.sessions.findUnique({
      where: {
        token,
      },
    });
  }
}
