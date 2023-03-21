import { GetSheetRepository } from "@/src/repositories/sheet-repository/GetSheetRepository";

export class ListSheetsService {
  constructor(private GetSheetRepository: GetSheetRepository) {}

  async execute(userId: number) {
    const sheets = await this.GetSheetRepository.userSheets(userId);
    return sheets;
  }
}
