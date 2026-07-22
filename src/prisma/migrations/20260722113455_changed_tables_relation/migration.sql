/*
  Warnings:

  - You are about to drop the column `drug_generic_name` on the `chunks` table. All the data in the column will be lost.
  - Added the required column `drug_id` to the `chunks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "chunks" DROP CONSTRAINT "chunks_drug_generic_name_fkey";

-- DropIndex
DROP INDEX "chunks_drug_generic_name_idx";

-- AlterTable
ALTER TABLE "chunks" DROP COLUMN "drug_generic_name",
ADD COLUMN     "drug_id" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "chunks_drug_id_idx" ON "chunks"("drug_id");

-- AddForeignKey
ALTER TABLE "chunks" ADD CONSTRAINT "chunks_drug_id_fkey" FOREIGN KEY ("drug_id") REFERENCES "drugs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
