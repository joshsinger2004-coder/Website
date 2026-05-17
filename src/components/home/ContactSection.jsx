import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "josh@joshsinger.co.uk",
    href: "mailto:josh@joshsinger.co.uk",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "London, UK",
    href: null,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_ID) {
      console.error("VITE_FORMSPREE_ID is not set");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("sending");

    const timeout = setTimeout(() => {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }, 10000);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      clearTimeout(timeout);

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (err) {
      clearTimeout(timeout);
      console.error("Form submission error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Enquire Now
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 space-y-8"
          >
            <p className="text-gray-400 leading-relaxed">
              Have a project in mind? Want to book a show or collaborate?
              Drop a message and let's make something great together.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/10">
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-blue-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for bookings</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Name</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-gray-950 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    required
                    className="bg-gray-950 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 h-12 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Subject</label>
                <Input
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="bg-gray-950 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 h-12 rounded-xl"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block">Message</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="bg-gray-950 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-medium shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-70"
              >
                {status === "sending" && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === "sent" && <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Message Sent!</span>}
                {status === "error" && <span>Something went wrong, try again</span>}
                {status === "idle" && <span className="flex items-center gap-2"><Send className="w-4 h-4" /> Send Message</span>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
