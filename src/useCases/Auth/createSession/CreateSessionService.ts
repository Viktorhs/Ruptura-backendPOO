import { Account } from "@/src/models/Account.js";
import { FindEmailRepository } from "@/src/repositories/auth-repository/FindEmailRepository.js";
import { CreateSessionRepository } from "@/src/repositories/auth-repository/CreateSessionRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class CreateSessionService {
  invalidCredentialsError = {
    name: "InvalidCredentialsError",
    message: "email or password are incorrect",
  };

  constructor(
    private CreateSessionRepository: CreateSessionRepository,
    private FindEmailRepository: FindEmailRepository,
  ) {}

  async execute({ email, password }: Omit<Account, "nickname">) {
    const secret = process.env.JWT_SECRET || "senha secreta";
    const isValidUser = await this.FindEmailRepository.getUnique(email);
    if (!isValidUser) {
      throw this.invalidCredentialsError;
    }

    const isPasswordValid = await bcrypt.compare(password, isValidUser.password);
    if (!isPasswordValid) {
      throw this.invalidCredentialsError;
    }

    const token = jwt.sign({ userId: isValidUser.id }, secret, { expiresIn: "48h" });
    await this.CreateSessionRepository.create({
      token,
      userId: Number(isValidUser.id),
    });

    return {
      nickname: isValidUser.nickname,
      token,
    };
  }
}
