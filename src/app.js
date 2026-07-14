import express from "express";

import chatRouter from "./routes/chat.js";
import { env } from "./config/env.js";

const app = express();

app.use(express.json());

app.use("/api", chatRouter);

app.listen(env.port, () => {
  console.log(`Server running on http://localhost:${env.port}`);
});
