import { CreateWeaponController } from "./CreateWeaponController.js";
import { CreateWeaponService } from "./CreateWeaponService.js";
import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository.js";
import { CreateSheetRepository } from "./../../../repositories/sheet-repository/CreateSheetRepository.js";

const createSheetRepository = new CreateSheetRepository();
const getSheetRepository = new GetSheetRepository();
const createWeaponService = new CreateWeaponService(createSheetRepository, getSheetRepository);
export const createWeaponController = new CreateWeaponController(createWeaponService);
