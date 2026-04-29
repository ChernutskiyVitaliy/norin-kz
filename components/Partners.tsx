"use client";

import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-32 text-center">

      <h2 className="text-3xl mb-10">
        Наши партнеры
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* GLOW ФОН */}
        <div className="absolute -z-10 w-[400px] h-[400px] bg-blue-600 blur-[120px] opacity-20 left-1/2 -translate-x-1/2"></div>

        <img
          src="/partners.png"
          className="mx-auto rounded-2xl shadow-lg shadow-blue-500/10 hover:scale-105 transition duration-500"
        />
      </motion.div>

    </section>
  );
}