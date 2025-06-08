"use client";

import Image from "next/image";
import { FC } from "react";
import { ArrowRight } from "lucide-react";

const aiData = [
  {
    title: "Contextual Intelligence",
    desc: "Kimova leverages contextual awareness to process real-time signals across systems, adapting rapidly to evolving patterns with precision.",
    icon: "/ML.svg",
  },
  {
    title: "Conversational AI",
    desc: "Kimova’s generative interface transforms complex queries into clear, actionable responses—making AI feel truly human.",
    icon: "/Generative-ai.svg",
  },
  {
    title: "Predictive Learning",
    desc: "Anticipate threats and opportunities with predictive models that self-learn and adapt with minimal supervision.",
    icon: "/DL.svg",
  },
  {
    title: "Precision Framework",
    desc: "An orchestration layer that integrates all AI forms—ensuring scalable, explainable, and defensible outcomes.",
    icon: "/precision.svg",
  },
];

const data = [
  {
    title: "Cloud Intelligence",
    subtitle: "Real-time decision engines built to scale across multi-cloud environments.",
    icon: "/cloud-data.svg",
  },
  {
    title: "Edge-Aware Signals",
    subtitle: "Leverage insights at the edge for smarter, faster response and adaptation.",
    icon: "/endpoint-data.svg",
  },
  {
    title: "Neural Graph Network",
    subtitle: "Explore how Kimova's intelligence web connects data for meaningful, high-fidelity automation.",
    icon: "/network-data.webp",
  },
];

const PrecisionAISection: FC = () => {
  return (
    <div>
      {/* === FIRST SECTION === */}
      <section className="relative bg-black text-white flex flex-col justify-center items-center overflow-hidden px-4 py-20 sm:py-28">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/background-video.jpg"
            alt="Background"
            fill
            className="object-cover opacity-40"
          />
        </div>

        {/* Heading */}
        <div className="z-10 text-center max-w-2xl mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            <span className="text-white">Kimova </span>
            <span className="text-orange-500">AI</span>
            <span className="text-white"> Enables</span>
            <br />
            Real-Time Adaptive Intelligence
          </h2>
        </div>

        {/* Card Section */}
        <div className="z-10 bg-white text-black rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-2 p-6 sm:p-10 gap-8 max-w-6xl w-full">
          {/* Left Content */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Activate your data and empower decisions with AI.
            </h3>

            <div className="space-y-4">
              {aiData.map(({ title, desc, icon }) => (
                <div key={title} className="flex gap-4 items-start">
                  <Image
                    src={icon}
                    alt={title}
                    width={32}
                    height={32}
                    className="mt-1 shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-orange-500">{title}</h4>
                    <p className="text-sm text-gray-700">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Responsive Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-sm">
              <Image
                src="/featured-wheel-ml.svg"
                alt="Wheel"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === SECOND SECTION === */}
      <section className="relative w-full bg-gradient-to-b from-[#1c0c07] to-black px-4 py-20">
        <div className="relative bg-white rounded-xl shadow-xl max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-10 z-10">
          {/* Left Image */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/ai-data-set.webp"
              alt="Security Dataset Visual"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-black">
                Built on ethically enriched data signals.
              </h3>
              <p className="text-gray-700 mt-2 text-sm">
                Kimova AI thrives on curated datasets across cloud, edge, and
                connected systems — driving intelligence that evolves with your
                enterprise.
              </p>
            </div>

            <div className="space-y-4">
              {data.map(({ title, subtitle, icon }) => (
                <div
                  key={title}
                  className="flex items-center justify-between border rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition bg-white"
                >
                  <div className="flex items-center gap-4">
                    <Image src={icon} alt={title} width={24} height={24} />
                    <div>
                      <h4 className="font-semibold text-black">{title}</h4>
                      <p className="text-sm text-gray-600">{subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight className="text-orange-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrecisionAISection;
