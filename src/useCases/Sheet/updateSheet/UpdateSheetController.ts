import httpStatus from "http-status";
import {
  InformationsSchema,
  StatusSchema,
  AttributesSchema,
  DescriptionSchema,
  WeaponsSchema,
  DefensesSchema,
  ItemsSchema,
  SkillsSchema,
  NotesSchema,
} from "./../../../protocols.js";
import { UpdateSheetService } from "./UpdateSheetService.js";
import { Request, Response } from "express";

export class UpdateSheetController {
  constructor(private UpdateSheetService: UpdateSheetService) {}

  async handle(req: Request, res: Response) {
    const { userId } = res.locals;
    const { sheetId } = req.params;
    const sheet = req.body;

    const isValidInformations = InformationsSchema.validate(sheet.characterInformation);
    const isValidStatus = StatusSchema.validate(sheet.characterStatus);
    const isValidAttributes = AttributesSchema.validate(sheet.characterAttributes);
    const isValidDescription = DescriptionSchema.validate(sheet.characterDescription);
    const isValidWeapons = WeaponsSchema.validate(sheet.characterWeapons);
    const isValidDefenses = DefensesSchema.validate(sheet.characterDefenses);
    const isValidItems = ItemsSchema.validate(sheet.characterItems);
    const isValidSkills = SkillsSchema.validate(sheet.characterSkills);
    const isValidNotes = NotesSchema.validate(sheet.characterNotes);

    if (
      isValidAttributes.error ||
      isValidDefenses.error ||
      isValidDescription.error ||
      isValidInformations.error ||
      isValidItems.error ||
      isValidNotes.error ||
      isValidSkills.error ||
      isValidStatus.error ||
      isValidWeapons.error
    ) {
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(isValidAttributes.error);
    }

    try {
      const sheetUpdated = await this.UpdateSheetService.execute(Number(userId), Number(sheetId), sheet);
      res.status(200).send(sheetUpdated);
    } catch (error) {
      return res.status(httpStatus.SERVICE_UNAVAILABLE).send(error);
    }
  }
}
