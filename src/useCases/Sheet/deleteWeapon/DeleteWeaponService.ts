import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository";
import { DeleteSheet } from "./../../../repositories/sheet-repository/DeleteSheetRepository";
export class DeleteWeaponService {
  constructor(private DeleteSheet: DeleteSheet, private GetSheetRepository: GetSheetRepository) {}

  async execute(sheetId: number, weaponId: number, userId: number) {
    const isValidSheet = await this.GetSheetRepository.sheet(userId, sheetId);
    if (!isValidSheet) {
      throw {
        name: "UnauthorizedError",
        message: "invalid sheet",
      };
    }

    const weaponsQuantity = await this.GetSheetRepository.weapon(sheetId);

    if (weaponsQuantity.length < 2) {
      throw {
        name: "UnauthorizedError",
        message: "invalid operation",
      };
    }

    return await this.DeleteSheet.deleteWeapon(weaponId);
  }
}
