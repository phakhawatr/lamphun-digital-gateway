
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 section-fade-in">
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
          alt="Travel inspiration" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Travel Inspiration Straight to Your Inbox
            </h2>
            <form className="flex flex-col md:flex-row gap-2 md:gap-0 w-full mt-8">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="md:rounded-r-none h-12 bg-white" 
              />
              <Button className="bg-orange hover:bg-orange-dark text-white md:rounded-l-none h-12 px-8">
                Subscribe
              </Button>
            </form>
            <p className="text-white/70 text-sm mt-4">
              Subscribe to our newsletter and get travel inspirations. Read our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
