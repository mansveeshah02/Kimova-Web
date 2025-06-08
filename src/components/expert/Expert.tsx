"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ExpertCardProps {
  image: string;
  name: string;
  title: string;
  description: string;
  cta: string;
}

const experts: ExpertCardProps[] = [
  {
    image: "/Mohit-Sir.jpeg",
    name: "Mohit Vaishnav",
    title: "CEO of AI Security Strategy",
    description:
      "Connect with our AI specialists to explore real-world defense strategies for protecting intelligent systems.",
    cta: "Speak with a Kimova AI expert",
  },
  {
    image: "/Krishna-Map.jpeg",
    name: "Krishna Vaishnav",
    title: "Lead Architect, Ethical AI",
    description:
      "Schedule a tailored session on AI governance, risk mitigation, and deploying trust-first systems at scale.",
    cta: "Book an AI strategy session",
  },
];

export default function ExpertConnectSection() {
  return (
    <section className="bg-black text-white">
      {/* === EXPERT SECTION === */}
      <div className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-6">
          <span className="text-orange-500">Connect</span> With Our Experts.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-xl overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="w-full sm:w-1/2 aspect-video sm:aspect-auto relative min-h-[250px]">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex flex-col justify-between w-full sm:w-1/2">
                <div>
                  <h3 className="font-semibold mb-1 text-lg">{expert.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{expert.title}</p>
                  <p className="text-sm text-gray-300 mb-6">
                    {expert.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-orange-500 cursor-pointer font-medium text-sm hover:underline">
                  {expert.cta}
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === EMAIL SUBSCRIBE SECTION === */}
      <div className="bg-[#111] py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Side */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 leading-snug">
              Stay in sync with Kimova’s latest innovations and alerts
            </h3>
          </div>

          {/* Form Side */}
          <div>
            <form className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <input
                type="email"
                placeholder="Enter your email to join the intelligence loop"
                className="w-full flex-1 px-4 py-3 rounded-md bg-black border border-white/20 text-white placeholder-white/70 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition"
              >
                Sign up <ArrowRight size={18} />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              By subscribing, you agree to our{" "}
              <a href="#" className="underline">
                Terms of Use
              </a>{" "}
              and acknowledge the{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
