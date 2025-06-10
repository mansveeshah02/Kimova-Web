"use client";

import { FC } from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#341911] to-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <Link href="/" className="inline-block text-xl font-bold text-orange-500">
            Precision AI
          </Link>
          <p className="text-sm text-white/70">
            Fighting AI with AI. Building smarter cybersecurity with automation, precision, and deep learning.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex gap-6 text-2xl text-orange-500">
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-white/50 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Precision AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
