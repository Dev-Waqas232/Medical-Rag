import { config } from "dotenv";

config();

export const env = {
  geminiApiKey: process.env.GEMINI_API_KEY,
  groqApiKey: process.env.GROQ_API_KEY,
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 8080,
};
