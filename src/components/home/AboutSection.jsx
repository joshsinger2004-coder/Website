import React from "react";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

const stats = [
  { icon: Mic, label: "Live Shows", value: "100+" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border border-white/5">
              <img
                src="/josh.jpg"
                alt="Josh Singer"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-center">
                    {stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <stat.icon className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <p className="text-white font-bold text-lg">{stat.value}</p>
                        <p className="text-gray-500 text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              The Story
              <span className="block text-gray-500">Behind The Sound</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                With a passion for live music and a natural ability to read a room, I've built
                a reputation as a go-to performer for events across the UK.
              </p>
              <p>
                From intimate private gatherings to large-scale corporate events and weddings, I
                bring energy, professionalism, and a setlist tailored to every crowd.
              </p>
              <p>
                Whether you need a performer who can set the tone for a special occasion or keep a
                dancefloor moving all night, I deliver an experience your guests won't forget.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-blue-600/50 to-transparent" />
              <span className="text-blue-400 text-sm font-medium">Est. 2024</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}