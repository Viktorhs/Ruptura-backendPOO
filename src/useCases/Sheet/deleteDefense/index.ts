import { DeleteDefenseController } from "./DeleteDefenseController.js";
import { DeleteDefenseService } from "./DeleteDefenseService.js";
import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository.js";
import { DeleteSheet } from "./../../../repositories/sheet-repository/DeleteSheetRepository.js";

const deleteSheet = new DeleteSheet();
const getSheetRepository = new GetSheetRepository();
const deleteDefenseService = new DeleteDefenseService(deleteSheet, getSheetRepository);
export const deleteDefenseController = new DeleteDefenseController(deleteDefenseService);
