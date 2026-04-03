"use client";

import { useState } from "react";
import { User, Lock } from "lucide-react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Logged in!");
    }, 2000);
  };

  return (
    <div className="w-full space-y-5">
      {/* USERNAME */}
      <div>
        <div className="relative mt-1">
          <input
            type="text"
            placeholder="Enter username"
            className="w-full pr-10 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <User
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* PASSWORD */}
      <div>
        <div className="relative mt-1">
          <input
            type="password"
            placeholder="Enter password"
            className="w-full pr-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <Lock
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      {/* BUTTON (LEFT FEEL) */}
      <div className="flex justify-start">
        <button
          onClick={handleLogin}
          disabled={loading}
          className="bg-emerald-600 text-white py-4 px-18 rounded-lg hover:bg-emerald-700 transition flex items-center justify-center"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </div>

      {/* FORGOT */}
      <p className="text-sm text-left">
        Forgot password?{" "}
        <a href="#" className="text-emerald-600 font-medium">
          Reset it here
        </a>
      </p>
    </div>
  );
}
