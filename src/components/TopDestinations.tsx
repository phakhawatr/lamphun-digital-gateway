
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Golden Bridge, Ba Na Hills",
    country: "Vietnam",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
  },
  {
    id: 2,
    name: "Dubrovnik",
    country: "Croatia",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff"
  },
  {
    id: 3,
    name: "Hot Air Balloon Cappadocia",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  },
  {
    id: 4,
    name: "Sydney Harbour Bridge",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
  },
  {
    id: 5,
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e"
  },
  {
    id: 6,
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  }
];

const TopDestinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Popular");
  const carouselRef = useRef<HTMLDivElement>(null);
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
  
  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 300;
    const currentPosition = carouselRef.current.scrollLeft;
    
    carouselRef.current.scrollTo({
      left: direction === 'left' ? currentPosition - scrollAmount : currentPosition + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={sectionRef} className="py-16 container mx-auto px-4 section-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Top Destinations</h2>
        <Button variant="outline" className="border-none hover:bg-gray-100 font-medium">
          Explore all destinations
        </Button>
      </div>
      
      <div className="flex flex-nowrap mb-8 overflow-x-auto scrollbar-none">
        {["Popular", "USA", "Europe", "Asia", "Africa & Middle East", "Australia & The Pacific", "Canada", "More"].map((tab) => (
          <button
            key={tab}
            className={`whitespace-nowrap px-4 py-2 mx-1 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="relative">
        <div 
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto carousel-container pb-4"
        >
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="destination-card min-w-[280px] w-[280px] flex-shrink-0"
            >
              <div className="relative h-[350px]">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{destination.name}</h3>
                  <p className="text-white/80 text-sm">{destination.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
