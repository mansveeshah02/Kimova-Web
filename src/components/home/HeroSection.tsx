"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="group relative h-[90vh] flex items-center justify-center text-white overflow-hidden px-4">
      {/* Background Image with Zoom on Hover */}
      <div className="absolute inset-0 -z-50 transition-transform duration-[3000ms] scale-100 group-hover:scale-125">
        <Image
          src="/Tallin-map.png"
          alt="Map of Europe (Tallinn)"
          fill
          className="object-cover brightness-75 transition-all duration-[3000ms]"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Smarter AI for Cybersecurity
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 px-2 sm:px-6">
          TurboAudit by Kimova AI redefines how organizations conduct ISO/IEC 27001 audits —
          with AI that automates, analyzes, and accelerates compliance.
        </p>

        <div className="mt-8">
          <Link href="/explore">
            <button className="bg-transparent border border-yellow-400 text-white px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition text-sm sm:text-base">
              Explore Now →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
