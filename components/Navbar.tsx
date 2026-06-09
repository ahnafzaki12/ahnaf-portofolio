"use client";

import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 20px, aktifkan efek mengecil
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500
        /* Desktop: Tetap di atas */
        md:top-6 md:bottom-auto
        /* Mobile: Pindah ke bawah */
        bottom-6 top-auto
      `}
    >
      <nav 
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-x-auto max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          ${isScrolled 
            ? "p-1 md:p-1.5 opacity-90 scale-95 md:scale-100 border-portfolio-accent/20 shadow-[0_4px_20px_rgba(79,47,109,0.2)]" 
            : "p-1.5 md:p-2 opacity-100 scale-100"
          }
        `}
      >
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`relative whitespace-nowrap rounded-full font-medium transition-all duration-300
                /* Padding & Text mengecil di mobile saat di-scroll */
                ${isScrolled 
                  ? "px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm" 
                  : "px-4 py-2 text-sm"
                }
                ${isActive
                    ? "bg-[#333333] text-white shadow-sm"
                    : "text-[#a0a0a0] hover:text-white hover:bg-white/5"
                }
              `}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}