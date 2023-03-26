import { CreateDefenseController } from "./CreateDefenseController.js";
import { CreateDefenseService } from "./CreateDefenseService.js";
import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository.js";
import { CreateSheetRepository } from "./../../../repositories/sheet-repository/CreateSheetRepository.js";

const createSheetRepository = new CreateSheetRepository();
const getSheetRepository = new GetSheetRepository();
const createDefenseService = new CreateDefenseService(createSheetRepository, getSheetRepository);
export const createDefenseController = new CreateDefenseController(createDefenseService);
