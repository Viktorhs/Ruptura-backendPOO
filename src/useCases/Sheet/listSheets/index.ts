import { ListSheetsController } from "./ListSheetsController.js";
import { ListSheetsService } from "./ListSheetsService.js";
import { GetSheetRepository } from "../../../repositories/sheet-repository/GetSheetRepository.js";

const getSheetRepository = new GetSheetRepository();
const listSheetsService = new ListSheetsService(getSheetRepository);
export const listSheetsController = new ListSheetsController(listSheetsService);
