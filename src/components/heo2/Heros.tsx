"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/video2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      <div className="relative z-10 max-w-7xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-snug sm:leading-tight mb-6">
          AI empowers innovation,
          <br />
          Lead with Intelligence. <br />
          <span className="text-gradient">Evolve faster with Kimova AI.</span>
        </h1>

        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-6">
          Powered by contextual intelligence and ethical AI.
        </p>

        <button className="px-6 py-3 border border-white rounded-full hover:bg-white/10 transition font-medium text-sm sm:text-base">
          Explore Solutions →
        </button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 text-left text-sm px-2 sm:px-4">
          <div>
            <Image
              src="/teaser-icon-1.svg"
              alt="AI Integration"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">
              Integrating AI Across Ecosystems
            </h3>
            <p className="text-white/70 mb-4">
              Real-time adaptive AI tailored for enterprise-grade performance,
              ensuring resilient, secure, and scalable operations.
            </p>
            <a className="text-orange-400 text-sm hover:underline cursor-pointer">
              Kimova Neural Framework →
            </a>
            <br />
            <a className="text-orange-400 text-sm hover:underline cursor-pointer">
              Predictive AI Pipelines →
            </a>
          </div>

          <div>
            <Image
              src="/teaser-icon-2.svg"
              alt="AI Design"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">
              Trustworthy AI by Design
            </h3>
            <p className="text-white/70 mb-4">
              Enable AI that is explainable, transparent, and compliant — from data intake to decision execution.
            </p>
            <a className="text-orange-400 text-sm hover:underline cursor-pointer">
              Kimova AIRS™ →
            </a>
            <br />
            <a className="text-orange-400 text-sm hover:underline cursor-pointer">
              Adaptive Risk Engines →
            </a>
            <br />
            <a className="text-orange-400 text-sm hover:underline cursor-pointer">
              Kimova Governance Suite →
            </a>
          </div>

          <div>
            <Image
              src="/teaser-icon-3.svg"
              alt="AI Simplification"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">
              Simplifying Intelligence Delivery
            </h3>
            <p className="text-white/70 mb-4">
              Intuitive interfaces and co-pilot tools that accelerate your AI
              operations, insights, and automation across teams.
            </p>
            <a className="text-orange-400 text-sm hover:underline cursor-pointer">
              See InsightX in Action →
            </a>
            <br />
            <a className="text-orange-400 text-sm hover:underline cursor-pointer">
              Try Kimova CoPilot →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
