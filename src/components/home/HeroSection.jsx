import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1];

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const motionProps = (delay = 0, y = 20) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: EASE },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-blue-950/30" />

      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div {...motionProps(0, 20)}>
          <p className="text-blue-400 font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Music · Live Performance · Events
          </p>
        </motion.div>

        <motion.h1
          {...motionProps(0.1, 30)}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-[0.9]"
        >
          JOSH
          <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            SINGER
          </span>
        </motion.h1>

        <motion.p
          {...motionProps(0.2, 20)}
          className="mt-8 text-lg sm:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed font-light"
        >
          Event musician and live performer.
        </motion.p>

        <motion.div
          {...motionProps(0.3, 15)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.1 }}
            onClick={() => scrollToSection("video")}
            className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-medium transition-[background,box-shadow] duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-150" />
            Watch Latest
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.1 }}
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-3 border border-white/15 hover:border-white/30 text-white px-8 py-4 rounded-full font-medium transition-[border-color,background-color] duration-200 hover:bg-white/5"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {!shouldReduceMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      )}
    </section>
  );
}
