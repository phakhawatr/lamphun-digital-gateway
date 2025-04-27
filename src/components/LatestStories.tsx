
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface Story {
  id: number;
  title: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}

const mainStory = {
  id: 1,
  title: "Los Angeles food & drink guide: 10 things to try in Los Angeles, California",
  category: "Food and Drink",
  readTime: "4 min read",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  date: "Aug 10, 2024",
  excerpt: "A curated tour of the best food and drinks around the city, from a cocktail connoisseur's perspective. Don't miss these 10 local hidden gems!"
};

const otherStories: Story[] = [
  {
    id: 2,
    title: "15 Small London Markets You'll Love: Markets in South London",
    category: "Shopping",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    date: "Aug 12, 2024"
  },
  {
    id: 3,
    title: "10 incredible hotels around the world you can book with points in 2024",
    category: "Hotels",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    date: "Aug 11, 2024"
  },
  {
    id: 4,
    title: "Visiting Chicago on a Budget: Affordable Eats and Attraction Deals",
    category: "Travel Budget",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    date: "Aug 08, 2024"
  }
];

const LatestStories: React.FC = () => {
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
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Latest Stories</h2>
        <Button variant="outline" className="border-none hover:bg-gray-100 font-medium">
          Read more articles
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
          <img 
            src={mainStory.image} 
            alt={mainStory.title} 
            className="w-full h-[280px] object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span className="font-medium text-orange">{mainStory.category}</span>
              <span className="mx-2">•</span>
              <span>{mainStory.date}</span>
              <span className="mx-2">•</span>
              <span>{mainStory.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 hover:text-orange transition-colors">
              {mainStory.title}
            </h3>
            <p className="text-gray-600 mb-4">{mainStory.excerpt}</p>
          </div>
        </div>
        
        <div className="space-y-1">
          {otherStories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-orange mb-1">
                  {story.category}
                </div>
                <h3 className="text-base font-semibold mb-2 hover:text-orange transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{story.date}</span>
                  <span className="mx-2">•</span>
                  <span>{story.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestStories;
