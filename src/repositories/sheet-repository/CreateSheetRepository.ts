import prisma from "../../database/db.js";

export class CreateSheetRepository {
  async create(userId: number) {
    const sheetId = await prisma.userSheets.create({
      data: {
        userId,
      },
    });

    await prisma.$transaction([
      prisma.characterInformations.create({
        data: {
          sheetId: sheetId.id,
        },
      }),
      prisma.characterAttributes.create({
        data: {
          sheetId: sheetId.id,
        },
      }),
      prisma.characterDefenses.create({
        data: {
          sheetId: sheetId.id,
        },
      }),
      prisma.characterDescription.create({
        data: {
          sheetId: sheetId.id,
        },
      }),
      prisma.characterItems.create({
        data: {
          sheetId: sheetId.id,
        },
      }),
      prisma.characterNotes.create({
        data: {
          sheetId: sheetId.id,
        },
      }),
      prisma.characterSkills.create({
        data: {
          sheetId: sheetId.id,
        },
      }),
      prisma.characterStatus.create({
        data: {
          sheetId: sheetId.id,
        },
      }),
      prisma.characterWeapons.create({
        data: {
          sheetId: sheetId.id,
        },
      }),
    ]);

    return {
      sheetId: sheetId.id,
    };
  }

  async createWeapon(sheetId: number) {
    const weaponUpdate = await prisma.characterWeapons.create({
      data: {
        sheetId: sheetId,
      },
    });
    return weaponUpdate;
  }

  async createDefense(sheetId: number) {
    const defenseUpdate = await prisma.characterDefenses.create({
      data: {
        sheetId: sheetId,
      },
    });
    return defenseUpdate;
  }
}
