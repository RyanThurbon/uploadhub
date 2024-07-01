import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: text("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashedPassword"),
  provider: text("provider"),
  picture: text("picture"),
});
