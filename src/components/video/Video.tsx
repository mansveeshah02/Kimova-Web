"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { PlayCircle, ArrowRight, ArrowLeft } from "lucide-react";

const tabs = ["Insights", "Knowledge Base", "Visual Briefs", "Technical Reports", "Live Demos"];

const videoData = [
  {
    title: "How Adaptive AI Transforms Trust in Digital Systems",
    name: "Aira Solis",
    role: "Chief Research Scientist, Kimova AI",
    thumbnail: "/cyber2.jpg",
  },
  {
    title: "Designing Transparent AI: From Model to Meaning",
    name: "Dr. Lena Voss",
    role: "Director of Explainability, Kimova AI",
    thumbnail: "/video2.png",
  },
  {
    title: "Scaling Ethical Intelligence with Real-Time Data",
    name: "Ravi Mehta",
    role: "VP Engineering, Edge Systems",
    thumbnail: "/HeroBg.jpg",
  },
];

export default function ResourceSection() {
  const [activeTab, setActiveTab] = useState("Insights");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#120702] text-white px-4 py-16 sm:px-6">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
            Stay ahead with <span className="text-orange-500">Kimova Insights.</span>
          </h2>
          <div className="flex gap-3 md:flex">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full bg-white/10 hover:bg-orange-600 transition hidden md:inline-flex"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full bg-white/10 hover:bg-orange-600 transition hidden md:inline-flex"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/5 flex md:flex-col gap-4 overflow-x-auto md:overflow-visible text-sm font-medium text-gray-400 whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border-l-2 pl-4 transition min-w-fit ${
                  activeTab === tab
                    ? "text-white border-orange-500"
                    : "border-transparent hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Video Carousel */}
          <div className="md:w-4/5">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
            >
              {videoData.map((video, index) => (
                <div
                  key={index}
                  className="min-w-[280px] sm:min-w-[340px] rounded-md overflow-hidden relative group bg-black/30"
                >
                  <div className="relative w-full aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.name}
                      fill
                      className="object-cover"
                    />
                    <PlayCircle className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-10 h-10 opacity-90 group-hover:scale-110 transition" />
                  </div>
                  <div className="p-4 space-y-1 text-sm">
                    <p className="text-gray-300">{video.name}</p>
                    <p className="text-gray-400">{video.role}</p>
                    <p className="text-white font-semibold text-base">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {videoData.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === 0 ? "bg-orange-500" : "bg-gray-600"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
