import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

if (!process.env.DB_URL) {
  throw new Error("DB_URL not set");
}

export default defineConfig({
  schema: "./lib/db/schemas/*.ts",
  out: "./lib/db/migrations/supabase",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL,
  },
});
