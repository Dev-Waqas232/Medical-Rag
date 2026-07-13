// generate.js
import { getEmbedding } from "./embed.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import pg from "pg";
import { config } from "dotenv";

config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const question = process.argv[2] || "What increases bleeding risk?";

async function retrieve(question, k = 3) {
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

function buildPrompt(question, chunks) {
  const context = chunks
    .map((c, i) => `[${i + 1}] (source: ${c.source}) ${c.content}`)
    .join("\n");

  return `You are a factual assistant. Answer the question ONLY using the context below.
If the answer is not in the context, say "I don't have information on that in my data."
Always cite the source(s) you used, e.g. (source: dummy_1).
Never give medical advice - only report what the context states, and remind the user to consult a doctor or pharmacist.

Context:
${context}

Question: ${question}

Answer:`;
}

async function generate(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-3.5-flash" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

async function run() {
  console.log(`Question: "${question}"\n`);

  const chunks = await retrieve(question);
  console.log("Retrieved chunks:");
  chunks.forEach((c) => console.log(`  - (${c.source}) ${c.content}`));
  console.log();

  const prompt = buildPrompt(question, chunks);
  const answer = await generate(prompt);

  console.log("Generated answer:\n");
  console.log(answer);

  await pool.end();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
