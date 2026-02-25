import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "../generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const connectionString =
  process.env.POSTGRES_PRISMA_URL ??
  process.env.DATABASE_URL ??
  "";

if (!connectionString) {
  throw new Error(
    "Missing database connection string. Set POSTGRES_PRISMA_URL or DATABASE_URL."
  );
}

// Vercel Postgres (Neon) requires SSL — the pg library doesn't enable it by default
const pool = new Pool({
  connectionString,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});

const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}