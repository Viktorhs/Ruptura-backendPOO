import bcrypt from "bcrypt";
import { Account } from "../../../models/Account.js";
import { CreateAccountRepository } from "../../../repositories/auth-repository/CreateAccountRepository.js";
import { FindEmailRepository } from "../../../repositories/auth-repository/FindEmailRepository.js";

export class CreateAccountService {
  constructor(
    private CreateAccountRepository: CreateAccountRepository,
    private FindEmailRepository: FindEmailRepository,
  ) {}

  async execute({ nickname, email, password }: Account) {
    const isValidEmail = await this.FindEmailRepository.getUnique(email);
    const isValidNickname = await this.FindEmailRepository.getNickname(nickname);

    if (isValidEmail?.id || isValidNickname?.id) {
      throw {
        name: "DuplicatedEmailError",
        message: "There is already an user with given email",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const account = new Account(nickname, email, hashedPassword);
    return await this.CreateAccountRepository.create(account);
  }
}
