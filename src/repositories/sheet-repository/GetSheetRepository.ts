import prisma from "../../database/db.js";

export class GetSheetRepository {
  async userSheets(userId: number) {
    return prisma.userSheets.findMany({
      where: {
        userId,
      },
      include: {
        characterInformations: {},
        characterDescription: {
          select: {
            appearance: true,
          },
        },
      },
    });
  }

  async sheet(userId: number, sheetId: number) {
    return prisma.userSheets.findFirst({
      where: {
        id: sheetId,
        userId,
      },
      include: {
        characterInformations: {
          where: {
            sheetId,
          },
        },
        characterStatus: {
          where: {
            sheetId,
          },
        },
        characterAttributes: {
          where: {
            sheetId,
          },
        },
        characterDescription: {
          where: {
            sheetId,
          },
        },
        characterWeapons: {
          where: {
            sheetId,
          },
        },
        characterDefenses: {
          where: {
            sheetId,
          },
        },
        characterItems: {
          where: {
            sheetId,
          },
        },
        characterSkills: {
          where: {
            sheetId,
          },
        },
        characterNotes: {
          where: {
            sheetId,
          },
        },
      },
    });
  }

  async weapon(sheetId: number) {
    return await prisma.characterWeapons.findMany({
      where: {
        sheetId,
      },
    });
  }

  async defense(sheetId: number) {
    return await prisma.characterDefenses.findMany({
      where: {
        sheetId,
      },
    });
  }
}
