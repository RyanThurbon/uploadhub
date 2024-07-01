import { GetUserResponse, getUser } from "@/lib/db/queries/auth";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<GetUserResponse>> {
  return NextResponse.json(await getUser());
}
