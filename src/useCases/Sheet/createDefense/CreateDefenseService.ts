import { GetSheetRepository } from "../../../repositories/sheet-repository/GetSheetRepository.js";
import { CreateSheetRepository } from "../../../repositories/sheet-repository/CreateSheetRepository.js";

export class CreateDefenseService {
  constructor(private CreateSheetRepository: CreateSheetRepository, private GetSheetRepository: GetSheetRepository) {}

  async execute(sheetId: number, userId: number) {
    const isValidSheet = await this.GetSheetRepository.sheet(userId, sheetId);

    if (!isValidSheet) {
      throw {
        name: "UnauthorizedError",
        message: "invalid sheet",
      };
    }

    const id = await this.CreateSheetRepository.createDefense(sheetId);
    return id;
  }
}
