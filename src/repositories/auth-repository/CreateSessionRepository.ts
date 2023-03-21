import prisma from "../../database/db.js";
import { Session } from "../../models/Session";

export class CreateSessionRepository {
  async create({ userId, token }: Session): Promise<Session> {
    return await prisma.sessions.create({
      data: {
        userId,
        token,
      },
    });
  }
}
