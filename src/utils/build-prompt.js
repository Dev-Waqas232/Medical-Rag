export function buildPrompt(question, chunks) {
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
