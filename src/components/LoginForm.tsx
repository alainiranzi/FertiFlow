"use client";

import { useState } from "react";
import { User, Lock } from "lucide-react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    // fake loading (replace with API later)
    setTimeout(() => {
      setLoading(false);
      alert("Logged in!");
    }, 2000);
  };

  return (
    <div className="w-full max-w-md space-y-5">
      {/* USERNAME */}
      <div>
        <label className="text-sm text-gray-600">Username</label>

        <div className="relative mt-1">
          <input
            type="text"
            placeholder="Enter username"
            className="w-full pr-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          {/* ICON RIGHT */}
          <User
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* PASSWORD */}
      <div>
        <label className="text-sm text-gray-600">Password</label>

        <div className="relative mt-1">
          <input
            type="password"
            placeholder="Enter password"
            className="w-full pr-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />

          {/* ICON RIGHT */}
          <Lock
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={handleLogin}
        disabled={loading}
        className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition flex items-center justify-center"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Signing in...
          </>
        ) : (
          "Sign in"
        )}
      </button>

      {/* FORGOT */}
      <p className="text-sm text-center">
        Forgot password?{" "}
        <a href="#" className="text-emerald-600 font-medium">
          Reset it here
        </a>
      </p>
    </div>
  );
}
