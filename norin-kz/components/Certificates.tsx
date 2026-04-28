"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Certificates() {
  const [certs, setCerts] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Загрузка сертификатов
  useEffect(() => {
    fetch("/api/certs")
      .then(res => res.json())
      .then(data => setCerts(data));
  }, []);

  // Автоскролл (плавный)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      container.scrollBy({ left: 0.5 });
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Кнопки
  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 300;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Делаем "бесконечность"
  const looped = [...certs, ...certs];

  return (
    <section className="max-w-6xl mx-auto px-6 mt-32">
      <h2 className="text-3xl mb-6">Сертификаты</h2>

      <div className="relative overflow-hidden">

        {/* GLOW ФОН */}
        <div className="absolute -z-10 w-[300px] h-[300px] bg-blue-600 blur-[120px] opacity-20 left-1/3 top-10"></div>

        {/* FADE СЛЕВА */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#030923] to-transparent z-10"></div>

        {/* FADE СПРАВА */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#030923] to-transparent z-10"></div>

        {/* ЛЕВАЯ СТРЕЛКА */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-white shadow-lg rounded-full p-3
                     hover:bg-blue-500/30 hover:scale-110
                     transition-all duration-300"
        >
          ←
        </button>

        {/* ПРАВАЯ СТРЕЛКА */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20
                     bg-white/10 backdrop-blur-md border border-white/20
                     text-white shadow-lg rounded-full p-3
                     hover:bg-blue-500/30 hover:scale-110
                     transition-all duration-300"
        >
          →
        </button>

        {/* КАРУСЕЛЬ */}
        <motion.div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto cursor-grab active:cursor-grabbing px-10 hide-scrollbar"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
        >
          {looped.map((c, i) => (
            <motion.img
              key={i}
              src={c}
              className="w-60 flex-shrink-0 rounded-2xl
                         border border-white/10
                         bg-white/5 backdrop-blur-md
                         shadow-lg shadow-blue-500/10
                         hover:scale-110 hover:shadow-blue-500/30
                         transition-all duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}