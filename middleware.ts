import { NextRequest, NextResponse } from "next/server";
import { userSession } from "./lib/userSession";

const pr = ["/dashboard", "/chat-ai", "/grammar", "/objects-names"]

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pr.includes(pathname)) {
    const userSess = await userSession()
    if (!userSess) {
      return NextResponse.redirect(new URL('/',req.url))
    }
  }
  
}