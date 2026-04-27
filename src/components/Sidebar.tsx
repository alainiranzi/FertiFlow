"use client";

import {
  Home,
  BarChart3,
  ShoppingCart,
  Users,
  Receipt,
  Package,
  Building2,
  User,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-5 flex flex-col">
      {/* 🔥 Logo (REAL IMAGE PLACE) */}
      <div className="flex items-center gap-3 mb-8">
        {/* PLACEHOLDER ONLY */}
        <img src="/logo2.svg" className="w-10 h-10 object-contain" />

        <h1 className="text-xl font-semibold text-emerald-600">FertiFlow</h1>
      </div>

      {/* OVERVIEW */}
      <p className="text-xs text-gray-400 mb-2">OVERVIEW</p>
      <NavItem icon={<Home size={18} />} label="Home" active />

      {/* REPORTS */}
      <p className="text-xs text-gray-400 mt-6 mb-2">REPORTS</p>
      <NavItem icon={<BarChart3 size={18} />} label="Sales" />
      <NavItem icon={<ShoppingCart size={18} />} label="Inventory" />
      <NavItem icon={<Users size={18} />} label="Farmers" />
      <NavItem icon={<Receipt size={18} />} label="Transactions" />

      {/* MANAGE */}
      <p className="text-xs text-gray-400 mt-6 mb-2">MANAGE</p>
      <NavItem icon={<Users size={18} />} label="Users & Access Control" />
      <NavItem icon={<Building2 size={18} />} label="Centres (Branches)" />
      <NavItem icon={<Package size={18} />} label="Product" />
      <NavItem icon={<User size={18} />} label="My Profile" />
    </aside>
  );
}

function NavItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
        ${
          active
            ? "bg-emerald-100 text-emerald-600"
            : "text-gray-700 hover:bg-gray-100"
        }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}
