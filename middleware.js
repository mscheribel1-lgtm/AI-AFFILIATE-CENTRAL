import { authMiddleware } from "@clerk/nextjs";

// This middleware is critical for Clerk authentication in Next.js.
// It protects the '/admin' route and ensures the sign-in/sign-up pages are public.
export default authMiddleware({
  // Routes that can be accessed while signed out, including the homepage
  publicRoutes: ["/", "/sign-in", "/sign-up"],
  // We ignore webhooks from authentication
  ignoredRoutes: ["/api/webhooks(.*)"],
});

// The simpler matcher config is essential to prevent build hangs on Vercel
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/"],
};
