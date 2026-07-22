import { env } from "../config/env.js";
import { PrismaClient } from "./generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: env.databaseUrl,
});

export const prisma = new PrismaClient({
  adapter,
  transactionOptions: {
    timeout: 60000000,
  },
});
