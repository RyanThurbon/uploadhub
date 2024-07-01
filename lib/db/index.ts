import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

config({ path: ".env.local" });

if (!process.env.DB_URL) {
  throw new Error("DB_URL not set");
}

const client = postgres(process.env.DB_URL);
export const db = drizzle(client);
