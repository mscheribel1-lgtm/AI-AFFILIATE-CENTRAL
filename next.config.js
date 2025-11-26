/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure the environment variables are available during the build phase
  // for Next.js to properly compile pages that rely on them (like middleware or not-found pages).
  env: {
    // We are explicitly exposing the environment variables required by Clerk
    // and the build process to ensure they are available even when building.
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },
};
