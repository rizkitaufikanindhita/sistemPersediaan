/*
  Warnings:

  - Added the required column `namaPengadaan` to the `InputBarang` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InputBarang" ADD COLUMN     "namaPengadaan" TEXT NOT NULL;
