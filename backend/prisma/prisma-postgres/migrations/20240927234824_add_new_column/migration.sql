/*
  Warnings:

  - Added the required column `bagian` to the `OutputBarang` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requestId` to the `OutputBarangDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OutputBarang" ADD COLUMN     "bagian" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OutputBarangDetail" ADD COLUMN     "requestId" TEXT NOT NULL;
