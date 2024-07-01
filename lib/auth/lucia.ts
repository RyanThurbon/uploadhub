import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

import { Lucia } from "lucia";
import { db } from "../db";
import { sessionsTable } from "../db/schemas/sessions";
import { usersTable } from "../db/schemas/users";

const adapter = new DrizzlePostgreSQLAdapter(db, sessionsTable, usersTable);

export const luciaAuthClient = new Lucia(adapter, {
  sessionCookie: {
    name: "uploadhub_session",
    expires: true,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});
