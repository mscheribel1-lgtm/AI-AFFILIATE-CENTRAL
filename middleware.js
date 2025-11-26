import { authMiddleware } from "@clerk/nextjs";

// This middleware is critical for Clerk authentication in Next.js.
// It applies authentication rules based on the 'config' object below.
export default authMiddleware({
  // Routes that can be accessed while signed out, including the homepage
  // The root path ("/") and sign-in/sign-up pages must be public.
  publicRoutes: ["/", "/sign-in", "/sign-up"],
});

// The simpler matcher config is essential to prevent deployment errors (like 500: MIDDLEWARE_INVOCATION_FAILED)
// by excluding static assets and Next.js internal paths from Middleware processing.
export const config = {
  // Add a comment to force cache clear on Vercel deployment
  // Cache Clear Commit 2025-11-26
  matcher: ["/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)", "/"],
};
