-- CreateTable
CREATE TABLE "characterAttributes" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "strength" INTEGER,
    "dexterity" INTEGER,
    "constitution" INTEGER,
    "intellingence" INTEGER,
    "wisdom" INTEGER,
    "charisma" INTEGER,
    "ballisticSkill" INTEGER,
    "meleeSkill" INTEGER
);

-- CreateTable
CREATE TABLE "characterDefenses" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "name" TEXT,
    "weight" TEXT,
    "CA" TEXT,
    "modifications" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-03-11 09:49:06.266979'::timestamp without time zone,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-03-11 09:49:06.266979'::timestamp without time zone
);

-- CreateTable
CREATE TABLE "characterDescription" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "age" TEXT,
    "height" TEXT,
    "weight" TEXT,
    "eyes" TEXT,
    "skin" TEXT,
    "hair" TEXT,
    "appearance" TEXT,
    "languages" TEXT,
    "personality" TEXT,
    "ideals" TEXT,
    "bonds" TEXT,
    "weaknesses" TEXT,
    "features" TEXT,
    "allies" TEXT,
    "story" TEXT
);

-- CreateTable
CREATE TABLE "characterInformations" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "characterName" TEXT,
    "function" TEXT,
    "race" TEXT,
    "alignment" TEXT,
    "daysSurvived" INTEGER
);

-- CreateTable
CREATE TABLE "characterItems" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "money" TEXT,
    "others" TEXT
);

-- CreateTable
CREATE TABLE "characterNotes" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "notes" TEXT
);

-- CreateTable
CREATE TABLE "characterSkills" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "skills" TEXT,
    "talents" TEXT
);

-- CreateTable
CREATE TABLE "characterStatus" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "CA" INTEGER,
    "speed" TEXT,
    "totalLife" INTEGER,
    "actualLife" TEXT,
    "totalSanity" INTEGER,
    "actualSanity" TEXT,
    "deathSuccesses" INTEGER NOT NULL DEFAULT 0,
    "deathFailure" INTEGER NOT NULL DEFAULT 0,
    "sanitySuccesses" INTEGER NOT NULL DEFAULT 0,
    "sanityFailure" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "characterWeapons" (
    "id" SERIAL NOT NULL,
    "sheetId" INTEGER NOT NULL,
    "name" TEXT,
    "weight" TEXT,
    "attack" TEXT,
    "type" TEXT,
    "damage" TEXT,
    "property" TEXT,
    "range" TEXT,
    "maxMunition" TEXT,
    "actualMunition" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-03-11 09:49:06.266979'::timestamp without time zone,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-03-11 09:49:06.266979'::timestamp without time zone
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-03-11 09:49:06.266979'::timestamp without time zone,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-03-11 09:49:06.266979'::timestamp without time zone
);

-- CreateTable
CREATE TABLE "userSheets" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-03-11 09:49:06.266979'::timestamp without time zone,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-03-11 09:49:06.266979'::timestamp without time zone
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "email" VARCHAR(500) NOT NULL,
    "password" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-03-11 09:49:06.266979'::timestamp without time zone,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-03-11 09:49:06.266979'::timestamp without time zone
);

-- CreateIndex
CREATE UNIQUE INDEX "characterAttributes_id_key" ON "characterAttributes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characterDefenses_id_key" ON "characterDefenses"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characterDescription_id_key" ON "characterDescription"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characterInformations_id_key" ON "characterInformations"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characterItems_id_key" ON "characterItems"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characterNotes_id_key" ON "characterNotes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characterSkills_id_key" ON "characterSkills"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characterStatus_id_key" ON "characterStatus"("id");

-- CreateIndex
CREATE UNIQUE INDEX "characterWeapons_id_key" ON "characterWeapons"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_id_key" ON "sessions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");

-- CreateIndex
CREATE UNIQUE INDEX "userSheets_id_key" ON "userSheets"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "characterAttributes" ADD CONSTRAINT "characterAttributes_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "userSheets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "characterDefenses" ADD CONSTRAINT "characterDefenses_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "userSheets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "characterDescription" ADD CONSTRAINT "characterDescription_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "userSheets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "characterInformations" ADD CONSTRAINT "characterInformations_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "userSheets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "characterItems" ADD CONSTRAINT "characterItems_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "userSheets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "characterNotes" ADD CONSTRAINT "characterNotes_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "userSheets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "characterSkills" ADD CONSTRAINT "characterSkills_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "userSheets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "characterStatus" ADD CONSTRAINT "characterStatus_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "userSheets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "characterWeapons" ADD CONSTRAINT "characterWeapons_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "userSheets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userSheets" ADD CONSTRAINT "userSheets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
