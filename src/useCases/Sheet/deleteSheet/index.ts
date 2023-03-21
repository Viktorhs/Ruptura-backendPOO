import { DeleteSheetController } from "./DeleteSheetController.js";
import { DeleteSheetService } from "./DeleteSheetService.js";
import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository.js";
import { DeleteSheet } from "./../../../repositories/sheet-repository/DeleteSheetRepository.js";

const deleteSheet = new DeleteSheet();
const getSheetRepository = new GetSheetRepository();
const deleteSheetService = new DeleteSheetService(deleteSheet, getSheetRepository);
export const deleteSheetController = new DeleteSheetController(deleteSheetService);
