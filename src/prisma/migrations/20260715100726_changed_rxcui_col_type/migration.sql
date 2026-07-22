/*
  Warnings:

  - The `rxcui` column on the `drugs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "drugs" DROP COLUMN "rxcui",
ADD COLUMN     "rxcui" TEXT[];
