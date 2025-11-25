import { UserButton, auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  return (
    <div className="text-center p-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">
        AI Affiliate Central
      </h1>
      <p className="text-gray-600 mb-6">
        Welcome! This is the placeholder for your public website.
      </p>

      {/* Conditional rendering based on Clerk authentication */}
      {!userId ? (
        <a 
          href="/sign-in" 
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md"
        >
          Sign In to Access Admin
        </a>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-green-600 font-medium">You are signed in!</p>
          <UserButton afterSignOutUrl="/" />
          <a
            href="/admin" 
            className="text-sm text-blue-500 hover:underline"
          >
            Go to Admin CMS
          </a>
        </div>
      )}
    </div>
  );
}
