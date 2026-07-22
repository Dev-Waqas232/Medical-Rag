/*
  Warnings:

  - Added the required column `updatedAt` to the `chunks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `drugs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chunks" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "drugs" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
