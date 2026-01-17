// src/middleware.js
import { NextResponse } from "next/server";


export function middleware(request) {
  const token = request.cookies.get("auth-token")?.value;

  const { pathname } = request.nextUrl;

  if (!token && pathname.startsWith("/items/")) {
   
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/items/:path*"],
};