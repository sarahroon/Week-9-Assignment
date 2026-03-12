import { withClerkMiddleware } from "@clerk/nextjs/server";

export default withClerkMiddleware(async (req) => {
  return new Response("OK");
});

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
