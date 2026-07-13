import pg from "pg";
import { config } from "dotenv";

config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  await pool.query(`CREATE EXTENSION IF NOT EXISTS vector;`);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS chunks (
      id SERIAL PRIMARY KEY,
      content TEXT NOT NULL,
      embedding VECTOR(3072),
      source TEXT
    );
  `);

  console.log("Table 'chunks' is ready.");

  const res = await pool.query(`SELECT current_database();`);
  console.log("Connected to database:", res.rows[0].current_database);

  await pool.end();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
