import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
const EASE = [0.23, 1, 0.32, 1];
export default function VideoSection() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="video" className="relative py-28 md:py-36 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Featured
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Latest Video
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          className="relative"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-white/5 shadow-2xl shadow-purple-900/10">
            <iframe
              src="https://player.vimeo.com/video/1193383652?badge=0&autopause=0&player_id=0&app_id=58479"
              title="WhatsApp Video 2026-05-18 at 21.21.47"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/5 via-blue-500/5 to-cyan-600/5 rounded-3xl blur-xl -z-10" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://instagram.com/jsings246"
            className="group flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors duration-150 text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            More on Instagram
            <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
