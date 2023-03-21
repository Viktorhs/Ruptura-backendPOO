import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository";
import { DeleteSheet } from "./../../../repositories/sheet-repository/DeleteSheetRepository";
export class DeleteSheetService {
  constructor(private DeleteSheet: DeleteSheet, private GetSheetRepository: GetSheetRepository) {}

  async execute(userId: number, sheetId: number) {
    const verifyUser = await this.GetSheetRepository.sheet(userId, sheetId);
    if (!verifyUser?.id) {
      throw {
        name: "UnauthorizedError",
      };
    }

    return await this.DeleteSheet.delete(sheetId);
  }
}
