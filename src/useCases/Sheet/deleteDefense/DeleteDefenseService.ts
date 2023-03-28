import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository";
import { DeleteSheet } from "./../../../repositories/sheet-repository/DeleteSheetRepository";

export class DeleteDefenseService {
  constructor(private DeleteSheet: DeleteSheet, private GetSheetRepository: GetSheetRepository) {}

  async execute(sheetId: number, defenseId: number, userId: number) {
    const isValidSheet = await this.GetSheetRepository.sheet(userId, sheetId);
    if (!isValidSheet) {
      throw {
        name: "UnauthorizedError",
        message: "invalid sheet",
      };
    }

    const defensesQuantity = await this.GetSheetRepository.defense(sheetId);

    if (defensesQuantity.length < 2) {
      throw {
        name: "UnauthorizedError",
        message: "invalid operation",
      };
    }

    return await this.DeleteSheet.deleteDefense(defenseId);
  }
}
