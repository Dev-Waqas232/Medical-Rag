import OpenAI from "openai";

import { env } from "../config/env.js";
import { buildPrompt } from "../utils/build-prompt.js";

const groq = new OpenAI({
  apiKey: env.groqApiKey,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function generateAnswer(question, chunks) {
  const prompt = buildPrompt(question, chunks);

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices[0].message.content;
}
