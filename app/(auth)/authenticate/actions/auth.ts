"use server";

import { luciaAuthClient } from "@/lib/auth/lucia";
import { googleOAuthClient } from "@/lib/auth/oauth/providers/google";
import { db } from "@/lib/db";
import { getUser } from "@/lib/db/queries/auth";
import { sessionsTable } from "@/lib/db/schemas/sessions";
import { usersTable } from "@/lib/db/schemas/users";
import { generateCodeVerifier, generateState } from "arctic";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { signInFormSchema } from "../schemas/sign-in-schema";
import { signUpFormSchema } from "../schemas/sign-up-schema";

async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

async function isValidPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

export async function signUpAction(values: z.infer<typeof signUpFormSchema>) {
  try {
    const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, values.email));

    if (existingUser.length > 0) {
      return { error: "Email already exists", success: false };
    }

    const hashedPassword = await hashPassword(values.password);
    const uuid = uuidv4();

    await db.insert(usersTable).values({
      id: uuid,
      username: values.username,
      email: values.email.toLowerCase(),
      hashedPassword: hashedPassword,
      provider: null,
      picture: null,
    });

    const session = await luciaAuthClient.createSession(uuid, {});
    const sessionCookie = luciaAuthClient.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong", success: false };
  }
}

export async function signInAction(values: z.infer<typeof signInFormSchema>) {
  try {
    const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, values.email.toLowerCase()));

    if (existingUser.length === 0) {
      return { error: "An account with this email does not exist", success: false };
    }

    const user = existingUser[0];

    if (user.hashedPassword === null) {
      return {
        error:
          "An account with this email exists, but it is linked to an OAuth login. Please log in using your OAuth provider.",
        success: false,
      };
    }

    if (!(await isValidPassword(values.password, user.hashedPassword))) {
      return { error: "Invalid password provided", success: false };
    }

    const session = await luciaAuthClient.createSession(user.id, {});
    const sessionCookie = luciaAuthClient.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong", success: false };
  }
}

export async function logoutAction() {
  try {
    const user = await getUser();
    if (!user) return { error: "No user to logout" };

    await db.delete(sessionsTable).where(eq(sessionsTable.userId, user.id));
    const sessionCookie = luciaAuthClient.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return redirect("/authenticate");
  } catch (error) {
    console.error("Failed to logout user:", error);
    return { error: "Failed to logout, please try again later" };
  }
}

export async function getGoogleOAuthConsentURL() {
  try {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();
    cookies().set("state", state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    cookies().set("verifier", codeVerifier, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    const authUrl = await googleOAuthClient.createAuthorizationURL(state, codeVerifier, {
      scopes: ["email", "profile"],
    });

    return { success: true, url: authUrl.toString() };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong", success: false };
  }
}
