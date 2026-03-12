import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
});
