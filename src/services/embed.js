import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "../config/env.js";

const genAI = new GoogleGenerativeAI(env.geminiApiKey);

export async function getEmbedding(text) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-embedding-001" });

    const result = await model.embedContent({
      content: { parts: [{ text }] },
      outputDimensionality: 3072,
    });

    return result.embedding.values;
  } catch (error) {
    console.error("Failed to generate embedding:", error);
    throw error;
  }
}
