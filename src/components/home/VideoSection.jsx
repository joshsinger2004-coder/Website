import React from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

export default function VideoSection() {
  return (
    <section id="video" className="relative py-28 md:py-36 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          {/* Video embed container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-white/5 shadow-2xl shadow-purple-900/10">
            <iframe
              src="https://player.vimeo.com/video/1169385537"
              title="Latest Video"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/5 via-blue-500/5 to-cyan-600/5 rounded-3xl blur-xl -z-10" />
        </motion.div>

        {/* Additional video links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://instagram.com/jsingermusic246"
            className="group flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            More on Instagram
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}