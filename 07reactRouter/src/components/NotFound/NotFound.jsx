import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800 relative overflow-hidden">
      {/* Icon / Illustration */}
      <div className="mb-6 animate-bounce-slow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-32 w-32 text-orange-500 drop-shadow-md"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.69 2.207-2.276 4.09-4.317 5.234A9.956 9.956 0 0112 19a9.956 9.956 0 01-5.225-1.766A9.96 9.96 0 012.458 12z"
          />
        </svg>
      </div>

      {/* Text */}
      <h1 className="text-6xl font-extrabold text-orange-600 mb-2">404</h1>
      <p className="text-gray-500 text-lg mb-8 text-center px-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button link */}
      <a
        href="/"
        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Back to Home
      </a>

      {/* Footer accent */}
      <div className="absolute bottom-6 text-sm text-gray-400">
        © {new Date().getFullYear()} YourBrand — All rights reserved
      </div>
    </div>
  );
}

export default NotFound;
