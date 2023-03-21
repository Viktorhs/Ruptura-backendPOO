import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository";
import { CreateSheetRepository } from "./../../../repositories/sheet-repository/CreateSheetRepository";

export class CreateSheetService {
  constructor(private CreateSheetRepository: CreateSheetRepository, private GetSheetRepository: GetSheetRepository) {}

  async execute(userId: number) {
    const userSheets = await this.GetSheetRepository.userSheets(userId);

    if (userSheets.length > 5) {
      throw {
        name: "UnauthorizedError",
        message: "Maximum limit reached",
      };
    }

    const sheetId = await this.CreateSheetRepository.create(userId);
    return sheetId;
  }
}
