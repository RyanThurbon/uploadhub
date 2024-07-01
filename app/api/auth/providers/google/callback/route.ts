import { luciaAuthClient } from "@/lib/auth/lucia";
import { googleOAuthClient } from "@/lib/auth/oauth/providers/google";
import { db } from "@/lib/db";
import { usersTable } from "@/lib/db/schemas/users";
import axios from "axios";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(request: NextRequest): Promise<any> {
  const url = request.nextUrl;
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!code || !state) {
    return new NextResponse("Invalid Request", { status: 400 });
  }

  const codeVerifier = cookies().get("verifier")?.value;
  const savedState = cookies().get("state")?.value;

  if (!codeVerifier || !savedState) {
    return new NextResponse("Invalid Request", { status: 400 });
  }

  if (state !== savedState) {
    return new NextResponse("Invalid Request", { status: 400, statusText: "State mismatch" });
  }

  const { accessToken } = await googleOAuthClient.validateAuthorizationCode(code, codeVerifier);
  const googleResponse = await axios("https://www.googleapis.com/oauth2/v1/userinfo", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const googleResponseData = (await googleResponse.data) as {
    id: string;
    email: string;
    name: string;
    picture: string;
  };

  let userId: string = "";

  const existingUser = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, googleResponseData.email.toLocaleLowerCase()));
  const uuid = uuidv4();

  try {
    if (existingUser.length > 0) {
      userId = existingUser[0].id;
    } else {
      await db.insert(usersTable).values({
        id: uuid,
        username: googleResponseData.name,
        email: googleResponseData.email.toLowerCase(),
        provider: "GOOGLE",
        picture: googleResponseData.picture,
      });
      userId = uuid;
    }
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong", success: false };
  }

  const session = await luciaAuthClient.createSession(userId, {});
  const sessionCookie = luciaAuthClient.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return redirect("/account/overview");
}
