import { getEmbedding } from "./embed.js";
import pg from "pg";
import { config } from "dotenv";

config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const chunks = [
  {
    content:
      "Ibuprofen interacts with blood thinners, increasing bleeding risk.",
    source: "dummy_1",
  },
  {
    content: "Paracetamol is generally safe with most drugs.",
    source: "dummy_2",
  },
  {
    content: "Aspirin increases bleeding risk with anticoagulants.",
    source: "dummy_3",
  },
];

async function run() {
  for (const chunk of chunks) {
    const vector = await getEmbedding(chunk.content);
    const vectorStr = `[${vector.join(",")}]`;

    await pool.query(
      `INSERT INTO chunks (content, embedding, source) VALUES ($1, $2, $3)`,
      [chunk.content, vectorStr, chunk.source],
    );
    console.log(`Inserted: ${chunk.source}`);
  }

  await pool.end();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
