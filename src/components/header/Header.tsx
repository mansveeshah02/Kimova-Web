"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-b from-[#5b3124] to-[#1b0a05] shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Kimova AI"
            width={50}
            height={50}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm text-white font-medium">
          <Link href="#platform" className="hover:text-orange-600">Platform</Link>
          <Link href="#precision-ai" className="hover:text-orange-600">Precision AI</Link>
          <Link href="#threat-intel" className="hover:text-orange-600">Threat Intel</Link>
          <Link href="#resources" className="hover:text-orange-600">Resources</Link>
          <Link href="#team" className="hover:text-orange-600">Team</Link>
        </nav>

        <Link href="/demo" className="hidden md:inline-block">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-2 rounded-lg pl-6">
            Login
          </button>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1b0a05] text-white px-6 pb-6 space-y-4 pt-3">
          <Link href="#platform" onClick={() => setIsOpen(false)} className="block hover:text-orange-500">Platform</Link>
          <Link href="#precision-ai" onClick={() => setIsOpen(false)} className="block hover:text-orange-500">Precision AI</Link>
          <Link href="#threat-intel" onClick={() => setIsOpen(false)} className="block hover:text-orange-500">Threat Intel</Link>
          <Link href="#resources" onClick={() => setIsOpen(false)} className="block hover:text-orange-500">Resources</Link>
          <Link href="#team" onClick={() => setIsOpen(false)} className="block hover:text-orange-500">Team</Link>
          <Link href="/demo" onClick={() => setIsOpen(false)}>
            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
