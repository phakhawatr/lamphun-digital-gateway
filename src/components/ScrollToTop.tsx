
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-orange hover:bg-orange-dark text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronRight className="w-6 h-6 transform rotate-[-90deg]" />
      </button>
    </div>
  );
};

export default ScrollToTop;
