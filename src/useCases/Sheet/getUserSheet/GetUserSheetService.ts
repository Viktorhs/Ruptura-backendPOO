import { GetSheetRepository } from "./../../../repositories/sheet-repository/GetSheetRepository";
export class GetUserSheetService {
  constructor(private GetSheetRepository: GetSheetRepository) {}

  async execute(userId: number, sheetId: number) {
    const sheet = await this.GetSheetRepository.sheet(userId, sheetId);
    return sheet;
  }
}
