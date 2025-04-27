
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
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
  
  const createDottedLines = () => {
    return (
      <>
        <div className="dotted-line" style={{ top: '40%', left: '55%', transform: 'rotate(30deg)' }}></div>
        <div className="dotted-line" style={{ top: '60%', left: '65%', transform: 'rotate(-20deg)' }}></div>
        <span className="absolute text-orange text-lg" style={{ top: '38%', left: '68%' }}>✈</span>
        <span className="absolute text-orange text-lg" style={{ top: '55%', left: '48%' }}>✈</span>
      </>
    );
  };

  return (
    <section ref={sectionRef} className="relative py-12 md:py-20 px-4 container mx-auto section-fade-in">
      {createDottedLines()}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover the World's <span className="text-highlight">Hidden</span> Wonders
          </h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Find the perfect travel experience, from thrilling adventures to unforgettable experiences. From rare encounters to remarkable destinations, we help you uncover the sparks that turns every trip into a cherished story.
          </p>
          <Button className="bg-orange hover:bg-orange-dark text-white rounded-full px-8 py-6 text-md transition-transform hover:scale-105">
            Plan your trip
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] w-full max-w-[400px]">
            <div className="absolute top-0 right-0 w-[65%] h-[55%] rounded-2xl overflow-hidden shadow-lg" style={{zIndex: 3}}>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Mountain lake with beautiful reflection" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-[5%] w-[60%] h-[50%] rounded-2xl overflow-hidden shadow-lg" style={{zIndex: 1}}>
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                alt="Beautiful architecture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[20%] left-0 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-lg" style={{zIndex: 2}}>
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                alt="Mountain landscape with sunrays" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
