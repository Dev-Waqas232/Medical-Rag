import { getEmbedding } from "./embed.js";

const SECTIONS = [
  "boxed_warning",
  "description",
  "clinical_pharmacology",
  "indications_and_usage",
  "warnings",
  "precautions",
  "adverse_reactions",
  "drug_abuse_and_dependence",
  "overdosage",
  "dosage_and_administration",
  "how_supplied",
];

const HEADERS = [
  "Risks from Concomitant Use with Opioids",
  "Abuse, Misuse, and Addiction",
  "Dependence and Withdrawal Reactions",
  "Acute Withdrawal Reactions",
  "Protracted Withdrawal Syndrome",
  "Sleep-driving and Other Complex Behaviors",
  "Severe Anaphylactic and Anaphylactoid Reactions",
  "Neonatal Sedation and Withdrawal Syndrome",
  "Information for Patients",
  "Laboratory Tests",
  "Drug Interactions",
  "Carcinogenesis, Mutagenesis, Impairment of Fertility",
  "Pregnancy",
  "Nursing Mothers",
  "Pediatric Use",
  "Geriatric Use",
];

function splitByHeaders(text) {
  const pattern = new RegExp(`(${HEADERS.join("|")})`, "g");
  const parts = text.split(pattern);

  if (parts.length <= 1) return [text.trim()];

  const chunks = [];

  for (let i = 1; i < parts.length; i += 2) {
    const header = parts[i];
    const content = parts[i + 1] || "";
    chunks.push(`${header}${content}`.trim());
  }

  return chunks;
}

export async function createChunks(drug, drugId) {
  const chunksToCreate = [];

  for (const section of SECTIONS) {
    const data = drug[section];
    if (!data) continue;

    const content = Array.isArray(data) ? data.join("\n\n") : data;
    if (!content || content.trim().length === 0) continue;

    let chunks;
    if (section === "warnings" || section === "precautions") {
      chunks = splitByHeaders(content);
    } else {
      chunks = [content.trim()];
    }

    for (const chunk of chunks) {
      if (chunk && chunk.length > 10) {
        console.log(`Creating embedding for 
          "${chunk}"`);

        const vectorEmbedding = await getEmbedding(chunk);

        console.log(`Created vector embedding ${vectorEmbedding}`);

        chunksToCreate.push({
          drugId: drugId,
          section: section,
          embedding: vectorEmbedding,
          sourceField: section,
          content: chunk,
        });
      }
    }
  }

  return chunksToCreate;
}
