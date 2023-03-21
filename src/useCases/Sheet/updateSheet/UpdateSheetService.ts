import { GetSheetRepository } from "../../../repositories/sheet-repository/GetSheetRepository";
import { UpdateSheetRepository } from "./../../../repositories/sheet-repository/UpdateSheetRepository";
export class UpdateSheetService {
  constructor(private UpdateSheetRepository: UpdateSheetRepository, private GetSheetRepository: GetSheetRepository) {}

  async execute(userId: number, sheetId: number, sheet: any) {
    const isValidSheet = await this.GetSheetRepository.sheet(userId, sheetId);
    if (!isValidSheet) {
      throw {
        name: "UnauthorizedError",
      };
    }

    const sheetUpdated = await this.UpdateSheetRepository.updated(sheetId, sheet);
    return sheetUpdated;
  }
}
