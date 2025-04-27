
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const TrekkersHighlights: React.FC = () => {
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
    <section ref={sectionRef} className="py-16 container mx-auto px-4 section-fade-in">
      <h2 className="text-3xl font-bold mb-8">Trekker's Highlights</h2>
      
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" 
                  alt="Maria Angelica" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">Maria Angelica</h3>
                <p className="text-sm text-gray-500">Manila, Philippines</p>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-orange fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            
            <h4 className="text-xl font-semibold mb-4">An Unforgettable Journey Through Turkey</h4>
            
            <p className="text-gray-600 mb-4">
              Thanks to Globe Trekker, my trip to Turkey was truly magical. Their expert guides and hidden tips led me to remarkable restaurants, historical treasures, and newly-restored attractions. The suggested itinerary made exploring Turkish cities so easy.
            </p>
            
            <p className="text-gray-600 mb-4">
              Cappadocia's historic landscapes at sunset, I'm already looking forward to my next adventure with Globe Trekker!
            </p>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="rounded-xl overflow-hidden h-full">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                  alt="Hot air balloons in Cappadocia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl overflow-hidden h-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
                    alt="Bosphorus Yacht Cruise"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-1/2 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1466442929976-97f336a657be" 
                    alt="Historic Turkish architecture" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Button className="bg-white/80 hover:bg-white text-black font-medium rounded-full backdrop-blur-sm">
                      See more highlights
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrekkersHighlights;
