import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository.js";
import { CreateSheetService } from "./CreateSheetService.js";
import { CreateSheetController } from "./CreateSheetController.js";
import { CreateSheetRepository } from "./../../../repositories/sheet-repository/CreateSheetRepository.js";

const createSheetRepository = new CreateSheetRepository();
const getSheetRepository = new GetSheetRepository();
const createSheetService = new CreateSheetService(createSheetRepository, getSheetRepository);
export const createSheetController = new CreateSheetController(createSheetService);
