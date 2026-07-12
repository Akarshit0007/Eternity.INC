"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-[#FDFBF7] backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-4 text-2xl font-bold text-[#1C1C1C]"
        >
          {/* The Logo Image */}
          <Image
            src="/svg/Logo.png"
            alt="Eternity.INC Logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <span>Eternity.<span className="text-[#FACC15]">INC</span></span>

        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-[#1C1C1C] transition hover:text-[#FFC107]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#1C1C1C]"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}