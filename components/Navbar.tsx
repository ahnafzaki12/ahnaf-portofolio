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
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Saat user sedang scroll, ubah state menjadi true
      setIsScrolling(true);

      // Bersihkan timeout sebelumnya agar timer ter-reset selama scroll aktif
      clearTimeout(scrollTimeout);

      // Jika dalam waktu 300ms tidak ada aktivitas scroll lagi, anggap user sudah berhenti
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300); // Batas waktu toleransi berhenti (dalam milidetik)
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header 
      className="fixed inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500 md:top-6 md:bottom-auto bottom-6 top-auto"
    >
      <nav 
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-x-auto max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          /* Transisi dibuat lebih responsif agar efek menciut/kembali terasa instan & elastis */
          transition-all duration-200 ease-out
          ${isScrolling 
            ? "p-1 max-sm:scale-90 border-portfolio-accent/30 shadow-[0_4px_20px_rgba(79,47,109,0.3)] bg-[#1a1a1a]/70" 
            : "p-1.5 md:p-2 max-sm:scale-100"
          }
        `}
      >
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`relative whitespace-nowrap rounded-full font-medium transition-all duration-200 ease-out
                ${isScrolling 
                  ? "px-3 py-1.5 text-xs" 
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