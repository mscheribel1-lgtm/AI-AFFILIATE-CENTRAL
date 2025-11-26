import { authMiddleware } from "@clerk/nextjs";

// This file protects all application routes, except for the explicit public routes defined below.
// This ensures that the /admin route requires a logged-in user.
export default authMiddleware({
  // Routes that can be accessed while signed out (e.g., the landing page and Clerk pages)
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up"
  ],
  // Routes that Clerk should ignore authentication requirements for entirely (e.g., webhooks)
  ignoredRoutes: [
    "/api/webhooks"
  ],
});
