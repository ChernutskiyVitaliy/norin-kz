"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-10 items-center">
      
      {/* ГЛОУ */}
      <div className="absolute -z-10 w-[400px] h-[400px] bg-blue-600 blur-[120px] opacity-30 top-0 left-0"></div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Комплексные решения <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            для безопасности
          </span>
        </h1>

        <p className="text-gray-400 mb-6">
          Видеонаблюдение, контроль доступа, сигнализация и СКС
        </p>

        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 px-6 py-3 rounded-xl shadow-lg shadow-blue-500/30"
          >
            Наши решения
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            className="border border-blue-500/40 px-6 py-3 rounded-xl backdrop-blur-md"
          >
            О компании
          </motion.a>
        </div>
      </motion.div>

      <motion.img
        src="/camera2.png"
        className="rounded-2xl shadow-2xl shadow-blue-500/0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
      />
    </section>
  );
}