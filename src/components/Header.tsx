"use client";

import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      {/* LEFT */}
      <button className="p-2 rounded-md hover:bg-gray-100">⬅️</button>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <div className="relative">
          <Bell className="text-gray-600" size={22} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            3
          </span>
        </div>

        {/* User */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center">
            👤
          </div>

          <div className="text-sm">
            <p className="font-medium text-gray-800">Carine Ishimwe</p>
            <p className="text-gray-400 text-xs">HQ Manager</p>
          </div>

          <span className="text-gray-400">▼</span>
        </div>
      </div>
    </header>
  );
}
