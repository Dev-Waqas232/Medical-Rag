import pg from "pg";

import { env } from "../config/env.js";
import { getEmbedding } from "./embed.js";

const { Pool } = pg;
const pool = new Pool({ connectionString: env.databaseUrl });

export async function retrieve(question, k = 3) {
  const queryVector = await getEmbedding(question);
  const vectorStr = `[${queryVector.join(",")}]`;

  const res = await pool.query(
    `SELECT content, source, embedding <=> $1 AS distance
     FROM chunks
     ORDER BY distance
     LIMIT $2`,
    [vectorStr, k],
  );

  return res.rows;
}
