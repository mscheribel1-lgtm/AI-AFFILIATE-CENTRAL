import Link from 'next/link';
import { ShieldAlert } from 'lucide-react'; // Using a standard icon for clarity

// This page renders when a user navigates to a route that does not exist (404).
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-md w-full">
        {/* Using a Lucide icon for visual feedback */}
        <ShieldAlert className="w-16 h-16 text-red-600 mx-auto mb-6" /> 
        <h1 className="text-4xl font-extrabold mb-3">404 - Not Found</h1>
        <p className="text-xl mb-6 text-gray-600">
          We couldn't find the page you were looking for.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 text-lg font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 shadow-md"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
