import { CreateSessionRepository } from "../../../repositories/auth-repository/CreateSessionRepository.js";
import { CreateSessionController } from "./CreateSessionController.js";
import { CreateSessionService } from "./CreateSessionService.js";
import { FindEmailRepository } from "../../../repositories/auth-repository/FindEmailRepository.js";

const sessionRepository = new CreateSessionRepository();
const findEmailRepository = new FindEmailRepository();
const createSessionService = new CreateSessionService(sessionRepository, findEmailRepository);
export const createSessionController = new CreateSessionController(createSessionService);
