import { DeleteDefenseController } from "./DeleteDefenseController";
import { DeleteDefenseService } from "./DeleteDefenseService";
import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository";
import { DeleteSheet } from "./../../../repositories/sheet-repository/DeleteSheetRepository";

const deleteSheet = new DeleteSheet();
const getSheetRepository = new GetSheetRepository();
const deleteDefenseService = new DeleteDefenseService(deleteSheet, getSheetRepository);
export const deleteDefenseController = new DeleteDefenseController(deleteDefenseService);
