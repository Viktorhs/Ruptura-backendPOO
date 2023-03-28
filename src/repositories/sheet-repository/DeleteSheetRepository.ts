import prisma from "../../database/db.js";

export class DeleteSheet {
  async delete(sheetId: number) {
    return await prisma.$transaction([
      prisma.characterInformations.deleteMany({
        where: {
          sheetId,
        },
      }),
      prisma.characterAttributes.deleteMany({
        where: {
          sheetId,
        },
      }),
      prisma.characterDefenses.deleteMany({
        where: {
          sheetId,
        },
      }),
      prisma.characterDescription.deleteMany({
        where: {
          sheetId,
        },
      }),
      prisma.characterItems.deleteMany({
        where: {
          sheetId,
        },
      }),
      prisma.characterNotes.deleteMany({
        where: {
          sheetId,
        },
      }),
      prisma.characterSkills.deleteMany({
        where: {
          sheetId,
        },
      }),
      prisma.characterStatus.deleteMany({
        where: {
          sheetId,
        },
      }),
      prisma.characterWeapons.deleteMany({
        where: {
          sheetId,
        },
      }),
      prisma.userSheets.delete({
        where: {
          id: sheetId,
        },
      }),
    ]);
  }

  async deleteWeapon(id: number) {
    return await prisma.characterWeapons.delete({
      where: {
        id,
      },
    });
  }

  async deleteDefense(id: number) {
    return await prisma.characterDefenses.delete({
      where: {
        id,
      },
    });
  }
}
