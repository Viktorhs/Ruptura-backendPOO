import prisma from "../../database/db.js";

export class UpdateSheetRepository {
  async updated(sheetId: number, sheet: any) {
    await prisma.$transaction([
      prisma.characterInformations.update({
        where: {
          id: sheet.characterInformations.id,
        },
        data: {
          ...sheet.characterInformations,
        },
      }),
      prisma.characterAttributes.update({
        where: {
          id: sheet.characterAttributes.id,
        },
        data: {
          ...sheet.characterAttributes,
        },
      }),
      prisma.characterDescription.update({
        where: {
          id: sheet.characterDescription.id,
        },
        data: {
          ...sheet.characterDescription,
        },
      }),
      prisma.characterItems.update({
        where: {
          id: sheet.characterItems.id,
        },
        data: {
          ...sheet.characterItems,
        },
      }),
      prisma.characterNotes.update({
        where: {
          id: sheet.characterNotes.id,
        },
        data: {
          ...sheet.characterNotes,
        },
      }),
      prisma.characterSkills.update({
        where: {
          id: sheet.characterSkills.id,
        },
        data: {
          ...sheet.characterSkills,
        },
      }),
      prisma.characterStatus.update({
        where: {
          id: sheet.characterStatus.id,
        },
        data: {
          ...sheet.characterStatus,
        },
      }),
      prisma.characterWeapons.update({
        where: {
          id: sheet.characterWeapons[0].id,
        },
        data: {
          ...sheet.characterWeapons[0],
        },
      }),
      prisma.characterDefenses.update({
        where: {
          id: sheet.characterDefenses[0].id,
        },
        data: {
          ...sheet.characterDefenses[0],
        },
      }),
    ]);
  }

  async updateWeapon(sheet: any) {
    const weaponUpdate = await prisma.characterWeapons.update({
      where: {
        id: sheet.id,
      },
      data: {
        ...sheet,
      },
    });
    return weaponUpdate;
  }

  async updateDefense(sheet: any) {
    const defenseUpdate = await prisma.characterDefenses.update({
      where: {
        id: sheet.id,
      },
      data: {
        ...sheet,
      },
    });
    return defenseUpdate;
  }
}
