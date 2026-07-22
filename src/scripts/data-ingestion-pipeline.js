import { prisma } from "../prisma/client.js";
import { config } from "dotenv";

import data from "../../data.json" with { type: "json" };
import { createChunks } from "../services/drug-chunks.js";

config();

async function dataIngestionPipeline() {
  try {
    const drugs = data.results;

    const latestInsertion = await prisma.drug.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    const startIndex = latestInsertion
      ? drugs.findIndex((d) => d.id === latestInsertion.id) + 1
      : 0;

    for (const drug of drugs.slice(startIndex)) {
      await prisma.$transaction(async (tx) => {
        const { openfda } = drug;

        const newDrug = await tx.drug.create({
          data: {
            id: drug.id,
            brandName: openfda.brand_name?.[0] ?? null,
            substanceName: openfda.substance_name?.[0] ?? null,
            pharmClassEpc: openfda.pharm_class_epc?.[0] ?? null,
            rxcui: openfda.rxcui ?? [],
            route: openfda.route?.[0] ?? null,
            manufacturerName: openfda.manufacturer_name?.[0] ?? null,
            genericName: openfda.generic_name?.[0] ?? null,
          },
        });

        console.log(`Created drug: ${newDrug.genericName}`);

        const chunksToCreate = await createChunks(drug, drug.id);

        if (chunksToCreate.length > 0) {
          let count = 0;
          for (const chunk of chunksToCreate) {
            const vectorString = `[${chunk.embedding.join(",")}]`;

            await tx.$executeRaw`
              INSERT INTO chunks (
                "drug_id", 
                "section", 
                "source_field", 
                "content", 
                "embedding",
                "createdAt",
                "updatedAt"
              ) VALUES (
                ${chunk.drugId},
                ${chunk.section},
                ${chunk.sourceField},
                ${chunk.content},
                ${vectorString}::vector,
                NOW(),
                NOW()
              )
            `;
            count++;
          }
          console.log(`Created ${count} chunks for drug ${newDrug.id}`);
        } else {
          console.log(`No chunks created for drug ${newDrug.id}`);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}

dataIngestionPipeline().catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
