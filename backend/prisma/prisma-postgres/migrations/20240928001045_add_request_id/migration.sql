/*
  Warnings:

  - Added the required column `requestId` to the `OutputBarang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OutputBarang" ADD COLUMN     "requestId" TEXT NOT NULL;
