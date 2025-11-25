import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css"; // We will create this file next.

export const metadata = {
  title: "AI Affiliate Central",
  description: "The main entry point for the AI Affiliate Central application.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* This is the main content wrapper. The 'children' will be the page.js content */}
          <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
