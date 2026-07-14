import { getEmbedding } from "./src/services/embed.js";
import pg from "pg";
import { config } from "dotenv";

config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const query = process.argv[2] || "What increases bleeding risk?";

async function run() {
  console.log(`Query: "${query}"\n`);

  const queryVector = await getEmbedding(query);
  const vectorStr = `[${queryVector.join(",")}]`;

  const res = await pool.query(
    `SELECT content, source, embedding <=> $1 AS distance
     FROM chunks
     ORDER BY distance
     LIMIT 3`,
    [vectorStr],
  );

  res.rows.forEach((row, i) => {
    console.log(
      `${i + 1}. [distance: ${row.distance.toFixed(4)}] (${row.source})`,
    );
    console.log(`   ${row.content}\n`);
  });

  await pool.end();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
