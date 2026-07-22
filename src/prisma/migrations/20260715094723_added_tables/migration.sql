CREATE EXTENSION IF NOT EXISTS vector;

-- CreateTable
CREATE TABLE "drugs" (
    "id" SERIAL NOT NULL,
    "generic_name" TEXT NOT NULL,
    "brand_name" TEXT,
    "substance_name" TEXT,
    "pharm_class_epc" TEXT,
    "rxcui" TEXT,
    "route" TEXT,
    "manufacturer_name" TEXT,
    CONSTRAINT "drugs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chunks" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "embedding" vector (3072),
    "section" TEXT NOT NULL,
    "source_field" TEXT,
    "drug_generic_name" TEXT NOT NULL,
    CONSTRAINT "chunks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "drugs_generic_name_key" ON "drugs" ("generic_name");

-- CreateIndex
CREATE INDEX "chunks_drug_generic_name_idx" ON "chunks" ("drug_generic_name");

-- CreateIndex
CREATE INDEX "chunks_section_idx" ON "chunks" ("section");

-- AddForeignKey
ALTER TABLE "chunks"
ADD CONSTRAINT "chunks_drug_generic_name_fkey" FOREIGN KEY ("drug_generic_name") REFERENCES "drugs" ("generic_name") ON DELETE RESTRICT ON UPDATE CASCADE;