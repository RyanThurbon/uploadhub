import { luciaAuthClient } from "@/lib/auth/lucia";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { db } from "..";
import { usersTable } from "../schemas/users";

export type GetUserResponse = {
  id: string;
  username: string;
  email: string;
  provider: string | null;
  picture: string | null;
} | null;

export async function getUser(): Promise<GetUserResponse> {
  const sessionId = cookies().get(luciaAuthClient.sessionCookieName)?.value || null;

  if (!sessionId) {
    return null;
  }

  const { session, user } = await luciaAuthClient.validateSession(sessionId);

  if (!user) return null;

  try {
    if (session && session.fresh) {
      const sessionCookie = luciaAuthClient.createSessionCookie(session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
    if (!session) {
      const sessionCookie = luciaAuthClient.createBlankSessionCookie();
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }

    const dbUser = await db
      .select({
        id: usersTable.id,
        username: usersTable.username,
        email: usersTable.email,
        provider: usersTable.provider,
        picture: usersTable.picture,
      })
      .from(usersTable)
      .where(eq(usersTable.id, user.id));

    return dbUser[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
