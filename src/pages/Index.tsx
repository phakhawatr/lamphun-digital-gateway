
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopDestinations from "@/components/TopDestinations";
import LatestStories from "@/components/LatestStories";
import TrekkersHighlights from "@/components/TrekkersHighlights";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index: React.FC = () => {
  useEffect(() => {
    // Intersection Observer to detect when sections enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all sections with fade-in animation
    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <main>
        <Hero />
        <TopDestinations />
        <LatestStories />
        <TrekkersHighlights />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
