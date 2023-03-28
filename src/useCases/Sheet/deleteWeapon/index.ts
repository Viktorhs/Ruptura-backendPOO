import { DeleteWeaponController } from "./DeleteWeaponController.js";
import { DeleteWeaponService } from "./DeleteWeaponService.js";
import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository.js";
import { DeleteSheet } from "./../../../repositories/sheet-repository/DeleteSheetRepository.js";

const deleteSheet = new DeleteSheet();
const getSheetRepository = new GetSheetRepository();
const deleteWeaponService = new DeleteWeaponService(deleteSheet, getSheetRepository);
export const deleteWeaponController = new DeleteWeaponController(deleteWeaponService);
