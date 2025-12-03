"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

const LogoIcon = () => {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-10 w-10"
      fill="none"
      aria-hidden="true"
    >
      <rect width="40" height="40" fill="#c8ff00" />
      <path
        d="M8 12L16 20L8 28"
        stroke="#0a0a0a"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <line
        x1="18"
        y1="28"
        x2="32"
        y2="28"
        stroke="#0a0a0a"
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  );
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [{ href: "/", label: "Accueil" }, ...NAV_LINKS];

  return (
    <header className="sticky top-0 z-40 border-b border-(--deg-gray-light) bg-(--deg-black)/95 backdrop-blur-sm">
      <div
        className="overflow-hidden border-b border-(--deg-gray-light) bg-(--deg-lime) py-1"
        aria-hidden="true"
      >
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="mx-8 text-xs font-bold uppercase tracking-wider text-(--deg-black)"
            >
              DEV EN GALÈRE • CODE • BLOG • VIDÉOS • BONS PLANS •
            </span>
          ))}
        </div>
      </div>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <LogoIcon />
          <div className="flex flex-col">
            <span className="text-lg font-bold uppercase tracking-tight leading-none text-(--deg-white)">
              Dev<span className="text-lime">EnGalère</span>
            </span>
            <span className="text-[10px] font-mono text-(--deg-muted) uppercase tracking-widest">
              <span aria-hidden="true">// </span>hub créatif
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-0 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover-line px-4 py-2 text-sm font-medium uppercase tracking-wider text-(--deg-white) transition-colors hover:text-lime"
            >
              <span
                className="font-mono text-(--deg-muted) mr-1"
                aria-hidden="true"
              >
                0{index + 1}/
              </span>
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            className="btn-brutal px-6 py-3 text-sm"
            aria-label="Collaborer avec DevEnGalère"
          >
            Collaborer →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="border border-(--deg-gray-light) p-2 text-(--deg-white) hover:border-lime hover:text-lime md:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          aria-label="Navigation mobile"
          className="border-t border-(--deg-gray-light) bg-(--deg-black) px-4 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-(--deg-gray-light) hover-line hover:border-lime hover:text-lime px-2 py-4 text-sm font-medium uppercase tracking-wider transition-colors hover:text-lime"
              >
                <span
                  className="font-mono text-(--deg-muted) mr-2"
                  aria-hidden="true"
                >
                  0{index + 1}/
                </span>
                {item.label}
              </Link>
            ))}
            <button
              className="btn-brutal mt-6 w-full py-4 text-sm"
              aria-label="Collaborer avec DevEnGalère"
            >
              Collaborer →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
