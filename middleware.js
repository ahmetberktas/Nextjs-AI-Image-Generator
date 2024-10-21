import { NextResponse } from "next/server";
import { applyRateLimiting } from "./utils/rate-limiting";

export async function middleware(req) {
  try {
    await applyRateLimiting(req);
    return NextResponse.next();
  } catch (err) {
    return new NextResponse("Fazla İstek Attınız", { status: 429 });
  }
}

export const config = {
  matcher: "/api/(.*)",
};
