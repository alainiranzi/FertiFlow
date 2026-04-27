"use client";

import { useState } from "react";
import { Bell, User, LogOut, ArrowLeft, Building2 } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      {/* LEFT */}
      <button className="p-2 rounded-md hover:bg-gray-100">
        <ArrowLeft size={20} />
      </button>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <div className="relative">
          <Bell className="text-gray-600" size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full"></span>

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
            3
          </span>
        </div>

        {/* User */}
        <div className="relative">
          {/* 🔘 OLD SIMPLE TRIGGER */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {/* Avatar */}
            <div className="relative w-10 h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center">
              <User size={18} />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-white"></span>
            </div>

            {/* Info */}
            <div className="text-sm">
              <p className="font-medium text-gray-800">Carine Ishimwe</p>
              <p className="text-gray-400 text-xs">HQ Manager</p>
            </div>

            {/* ▼ OLD GRAY ICON */}
            <span className="text-gray-400 text-sm">▼</span>
          </div>

          {/* 🔽 DROPDOWN (UNCHANGED EXACTLY) */}
          {open && (
            <div className="absolute right-0 mt-2 w-52 bg-white border rounded-lg shadow-md overflow-hidden z-50">
              {/* Profile */}
              <div className="px-4 py-3 bg-green-100">
                <div className="flex items-center gap-2 font-medium text-gray-800">
                  <User size={16} />
                  Carine Ishimwe
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <Building2 size={16} />
                  HQ Manager
                  <span className="w-2 h-2 bg-green-500 rounded-full ml-1"></span>
                </div>
              </div>

              {/* Logout */}
              <button
                className="w-full flex items-center gap-2 text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                onClick={() => {
                  setOpen(false);
                  console.log("Logout");
                }}
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
