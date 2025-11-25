import { authMiddleware } from "@clerk/nextjs";

// This middleware is critical for Clerk authentication in Next.js.
// It protects the '/admin' route and ensures the sign-in/sign-up pages are public.
export default authMiddleware({
  // Routes that can be accessed while signed out, including the homepage
  publicRoutes: ["/", "/sign-in", "/sign-up"],

  // Routes that require a valid sign-in (e.g., the admin panel)
  // If a user tries to access a protected route while signed out, 
  // they will be redirected to the sign-in page.
  ignoredRoutes: ["/api/webhooks(.*)"],
});

// We are simplifying the matcher to fix the build error.
// This is the standard, simple configuration for Next.js App Router protection.
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};

### **Final Action Steps**

1.  **Copy the Plain Text Code:** Copy the block of JavaScript above (starting with `import { authMiddleware }`).
2.  **Paste and Replace:** In the GitHub editor for `middleware.js`, paste the code, **replacing everything** currently in that file.
3.  **Commit:** Scroll down and click the green **"Commit changes"** button.

Once you perform this commit, the build should finally turn green!
