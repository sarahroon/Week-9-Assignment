// app/proxy.js
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Optional: add custom logic here
});

// Configure which routes the middleware applies to
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)", // all except Next.js internals
    "/(api|trpc)(.*)", // include API routes if needed
  ],
};
