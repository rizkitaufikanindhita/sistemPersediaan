/*
  Warnings:

  - Added the required column `bagian` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomer` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Request" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tanggal" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bagian" TEXT NOT NULL,
    "nomer" TEXT NOT NULL
);
INSERT INTO "new_Request" ("id", "tanggal", "userId") SELECT "id", "tanggal", "userId" FROM "Request";
DROP TABLE "Request";
ALTER TABLE "new_Request" RENAME TO "Request";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
