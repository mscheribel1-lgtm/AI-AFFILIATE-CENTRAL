import { authMiddleware } from "@clerk/nextjs";

// This middleware is critical for Clerk authentication in Next.js.
// It protects the '/admin' route and ensures the sign-in/sign-up pages are public.
export default authMiddleware({
  // Routes that can be accessed while signed out, including the homepage
  publicRoutes: ["/", "/sign-in", "/sign-up"],

  // Routes that require a valid sign-in (e.g., the admin panel)
  // If a user tries to access a protected route while signed out, 
  // they will be redirected to the sign-in page.
  ignoredRoutes: ["/api/webhooks(.*)"], // We ignore webhooks from authentication
});

export const config = {
  // Apply middleware to all routes except API routes and static files
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

### **Action Plan: Create the Middleware File**

1.  **Go to GitHub** and navigate to the **root** of your repository (`AI-AFFILIATE-CENTRAL`).
2.  Click **"Add file"** $\rightarrow$ **"Create new file"**.
3.  **Name the File:** Type the name: **`middleware.js`**
4.  **Paste the Code:** Copy and paste the plain text code above into the file content area.
5.  **Commit the File:** Click the green **"Commit new file"** button.

This should resolve the final build error. Please confirm once you've committed the file!
