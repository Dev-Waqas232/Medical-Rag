import data from "../../data.json" with { type: "json" };
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDrugs() {
  const drugsData = data.results.map((d) => d.openfda);

  for (const drug of drugsData) {
    const genericName = drug.generic_name?.[0];

    if (!genericName) {
      console.log("Skipping record with no generic_name");
      continue;
    }

    await prisma.drug.upsert({
      where: { genericName },
      update: {},
      create: {
        genericName,
        brandName: drug.brand_name?.[0] ?? null,
        substanceName: drug.substance_name?.[0] ?? null,
        pharmClassEpc: drug.pharm_class_epc?.[0] ?? null,
        rxcui: drug.rxcui ?? [],
        route: drug.route?.[0] ?? null,
        manufacturerName: drug.manufacturer_name?.[0] ?? null,
      },
    });

    console.log(`Inserted/skipped drug: ${genericName}`);
  }

  await prisma.$disconnect();
}

seedDrugs().catch(async (err) => {
  console.error(err);
  await prisma.$disconnect();
  process.exit(1);
});
