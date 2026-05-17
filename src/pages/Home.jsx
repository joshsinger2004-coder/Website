import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import VideoSection from "@/components/home/VideoSection";
import SocialSection from "@/components/home/SocialSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}