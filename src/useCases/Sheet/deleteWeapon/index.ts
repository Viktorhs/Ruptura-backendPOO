import { DeleteWeaponController } from "./DeleteWeaponController";
import { DeleteWeaponService } from "./DeleteWeaponService";
import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository";
import { DeleteSheet } from "./../../../repositories/sheet-repository/DeleteSheetRepository";

const deleteSheet = new DeleteSheet();
const getSheetRepository = new GetSheetRepository();
const deleteWeaponService = new DeleteWeaponService(deleteSheet, getSheetRepository);
export const deleteWeaponController = new DeleteWeaponController(deleteWeaponService);
