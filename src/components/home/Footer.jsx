import React from "react";

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/joshsingermusic" },
  { name: "Facebook", url: "https://www.facebook.com/josh.singer.710" },
];

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">JOSH SINGER</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Artist and performer. Creating sounds that move the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navigate</h4>
            <div className="space-y-3">
              {["about", "video", "social", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-gray-500 hover:text-blue-400 transition-colors text-sm capitalize"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Socials</h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-500 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Josh Singer. All rights reserved.
          </p>
          <a
            href="https://github.com/matthewkayne"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-xs hover:text-blue-400 transition-colors"
          >
            Built by Matthew Kayne
          </a>
        </div>
      </div>
    </footer>
  );
}