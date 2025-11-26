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
          <header className="flex justify-end p-4 bg-white shadow-md w-full">
            <UserButton afterSignOutUrl="/" />
          </header>
          
          <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8 pt-0">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
