import { ClerkProvider, UserButton } from "@clerk/nextjs";
import "../globals.css"; 

export const metadata = {
  title: "AI Affiliate Central",
  description: "The main entry point for the AI Affiliate Central application.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Header/Nav for user context with UserButton */}
          <header className="flex justify-end p-4 bg-white shadow-md w-full">
            {/* The UserButton handles sign-out and profile management */}
            <UserButton afterSignOutUrl="/" />
          </header>
          
          {/* Main Content Area */}
          <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8 pt-0">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}import { ClerkProvider, UserButton } from "@clerk/nextjs";
// **IMPORTANT CHANGE:** Path updated to '../globals.css' because the file is now 
// inside the 'app' folder, needing to step up one directory to find globals.css.
import "../globals.css"; 

export const metadata = {
  title: "AI Affiliate Central",
  description: "The main entry point for the AI Affiliate Central application.",
};

// This component wraps the ENTIRE application, protecting all child routes.
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Header/Nav for user context with UserButton */}
          <header className="flex justify-end p-4 bg-white shadow-md w-full">
            {/* The UserButton handles sign-out and profile management */}
            <UserButton afterSignOutUrl="/" />
          </header>
          
          {/* Main Content Area */}
          <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8 pt-0">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
