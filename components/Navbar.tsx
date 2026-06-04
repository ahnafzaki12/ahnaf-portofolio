"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Project" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-[#1a1a1a]/90 p-1.5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-x-auto max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {navLinks.map(({ href, label }) => {
          // Mengecek apakah URL saat ini sama dengan href milik menu
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-[#333333] text-white shadow-sm"
                  : "text-[#a0a0a0] hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}