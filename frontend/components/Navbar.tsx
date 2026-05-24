

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, Menu, X, Zap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "News" },
  { href: "/tools", label: "AI Tools" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--card)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[var(--accent)]">
          <Zap size={24} />
          TechPulse
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--foreground)] hover:text-[var(--accent)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="rounded-full p-2 hover:bg-[var(--border)] transition"
          >
            <Search size={20} />
          </button>
          <ThemeToggle />
          <button
            className="md:hidden rounded-full p-2 hover:bg-[var(--border)] transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-[var(--border)] px-4 py-3">
          <input
            type="text"
            placeholder="Search articles or tools..."
            className="w-full max-w-2xl mx-auto block rounded-lg bg-[var(--background)] border border-[var(--border)] px-4 py-2 text-sm focus:outline-none focus:border-[var(--accent)]"
          />
        </div>
      )}

      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border)] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}