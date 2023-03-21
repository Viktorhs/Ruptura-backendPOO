import { CreateAccountController } from "./CreateAccountController.js";
import { FindEmailRepository } from "../../../repositories/auth-repository/FindEmailRepository.js";
import { CreateAccountService } from "./CreateAccountService.js";
import { CreateAccountRepository } from "../../../repositories/auth-repository/CreateAccountRepository.js";

const accountRepository = new CreateAccountRepository();
const findEmailRepository = new FindEmailRepository();
const createAccountService = new CreateAccountService(accountRepository, findEmailRepository);
export const createAccountController = new CreateAccountController(createAccountService);
