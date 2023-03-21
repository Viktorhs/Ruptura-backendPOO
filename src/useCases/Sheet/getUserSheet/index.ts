import { GetUserSheetController } from "./GetUSerSheetController.js";
import { GetUserSheetService } from "./GetUserSheetService.js";
import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository.js";

const getSheetRepository = new GetSheetRepository();
const getUserSheetService = new GetUserSheetService(getSheetRepository);
export const getUserSheetController = new GetUserSheetController(getUserSheetService);
