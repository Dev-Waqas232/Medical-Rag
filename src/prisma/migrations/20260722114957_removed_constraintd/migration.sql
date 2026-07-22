/*
  Warnings:

  - The primary key for the `drugs` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "chunks" DROP CONSTRAINT "chunks_drug_id_fkey";

-- DropIndex
DROP INDEX "drugs_generic_name_key";

-- AlterTable
ALTER TABLE "chunks" ALTER COLUMN "drug_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "drugs" DROP CONSTRAINT "drugs_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "generic_name" DROP NOT NULL,
ADD CONSTRAINT "drugs_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "drugs_id_seq";

-- AddForeignKey
ALTER TABLE "chunks" ADD CONSTRAINT "chunks_drug_id_fkey" FOREIGN KEY ("drug_id") REFERENCES "drugs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
