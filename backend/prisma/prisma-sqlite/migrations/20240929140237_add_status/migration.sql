/*
  Warnings:

  - Added the required column `status` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Request" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tanggal" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bagian" TEXT NOT NULL,
    "status" INTEGER NOT NULL
);
INSERT INTO "new_Request" ("bagian", "id", "tanggal", "userId") SELECT "bagian", "id", "tanggal", "userId" FROM "Request";
DROP TABLE "Request";
ALTER TABLE "new_Request" RENAME TO "Request";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
