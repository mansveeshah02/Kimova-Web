"use client";

import { useEffect, useRef, useState } from "react";

const useCounter = (end: number, duration: number) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let start = 0;
          const increment = end / (duration / 16);

          const step = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return { ref, count };
};

export default function StatsCounter() {
  const clients = useCounter(250, 2000);
  const projects = useCounter(180, 2000);
  const employees = useCounter(120, 2000);

  return (
    <section className="w-full bg-black text-white py-20 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div
          ref={clients.ref}
          className="bg-[#1c1c1c] p-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
        >
          <h3 className="text-4xl font-bold text-orange-500 mb-2">
            {clients.count}+
          </h3>
          <p className="text-lg text-white/80">Clients</p>
        </div>

        {/* Projects */}
        <div
          ref={projects.ref}
          className="bg-[#1c1c1c] p-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
        >
          <h3 className="text-4xl font-bold text-orange-500 mb-2">
            {projects.count}+
          </h3>
          <p className="text-lg text-white/80">Projects</p>
        </div>

        <div
          ref={employees.ref}
          className="bg-[#1c1c1c] p-10 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
        >
          <h3 className="text-4xl font-bold text-orange-500 mb-2">
            {employees.count}+
          </h3>
          <p className="text-lg text-white/80">Employees Worldwide</p>
        </div>
      </div>
    </section>
  );
}
