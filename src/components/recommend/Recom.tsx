"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const recommendedItems = [
  {
    title: "Announcing TurboAudit AI",
    subtitle: "Read the latest",
    image: "/Image1.jpg",
    link: "#",
  },
  {
    title: "AI + Compliance Insights with Experts",
    subtitle: "Watch now",
    image: "/image2.jpeg",
    link: "#",
  },
  {
    title: "Kimova Magazine: Future Secured",
    subtitle: "Read the magazine",
    image: "/image3.jpg",
    link: "#",
  },
  {
    title: "ISO 27001: AI-Powered Gap Report",
    subtitle: "Get Started",
    image: "/images4.jpg",
    link: "#",
  },
  {
    title: "Announcing TurboAudit AI",
    subtitle: "Read the latest",
    image: "/image5.jpg",
    link: "#",
  },
  {
    title: "AI + Compliance Insights with Experts",
    subtitle: "Watch now",
    image: "/cyber1.jpg",
    link: "#",
  },
  {
    title: "Kimova Magazine: Future Secured",
    subtitle: "Read the magazine",
    image: "/cyber2.jpg",
    link: "#",
  },
  {
    title: "ISO 27001: AI-Powered Gap Report",
    subtitle: "Get Started",
    image: "/Image1.jpg",
    link: "#",
  },
];

export default function Recommended() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 260;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#0a0402] via-[#1a0e08] to-[#291d0f] py-12 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-sm sm:text-base font-medium tracking-widest uppercase">
            Recommended
          </h3>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition"
              aria-label="Scroll Right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-2 whitespace-nowrap scroll-smooth no-scrollbar"
        >
          {recommendedItems.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[340px] max-w-[340px] h-[200px] bg-black/20 hover:bg-black/30 transition rounded-lg p-2"
            >
              <div className="w-full h-32 relative rounded-md overflow-hidden mb-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold mb-1 leading-tight">
                {item.title}
              </p>
              <span className="text-xs text-white/60">{item.subtitle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
