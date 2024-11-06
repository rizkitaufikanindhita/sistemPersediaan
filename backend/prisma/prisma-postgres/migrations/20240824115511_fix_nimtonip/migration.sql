/*
  Warnings:

  - You are about to drop the column `nim` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nip]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nip` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_nim_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "nim",
ADD COLUMN     "nip" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_nip_key" ON "User"("nip");
