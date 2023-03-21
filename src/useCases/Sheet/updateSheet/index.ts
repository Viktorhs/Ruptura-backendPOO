import { UpdateSheetController } from "./UpdateSheetController.js";
import { UpdateSheetService } from "./UpdateSheetService.js";
import { UpdateSheetRepository } from "./../../../repositories/sheet-repository/UpdateSheetRepository.js";
import { GetSheetRepository } from "../../../repositories/sheet-repository/GetSheetRepository.js";

const getSheetRepository = new GetSheetRepository();
const updateSheetRepository = new UpdateSheetRepository();
const updateSheetService = new UpdateSheetService(updateSheetRepository, getSheetRepository);
export const updateSheetController = new UpdateSheetController(updateSheetService);
