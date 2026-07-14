import { Router } from "express";
import { retrieve } from "../services/retrieve";
import { generateAnswer } from "../services/generate";

const router = Router();

router.post("/chat", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "question is required" });
    }

    const chunks = await retrieve(question);
    const answer = await generateAnswer(question, chunks);

    res.json({
      question,
      answer,
      sources: chunks.map((c) => ({ source: c.source, content: c.content })),
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export { router as chatRouter };
