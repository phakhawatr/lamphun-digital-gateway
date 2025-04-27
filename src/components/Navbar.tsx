
import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-orange text-2xl">✈</span>
          <span className="font-bold text-xl tracking-tight">GLOBE TREKKER</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-orange transition-colors">Destinations</a>
          <a href="#" className="text-sm font-medium hover:text-orange transition-colors">Travel plan</a>
          <a href="#" className="text-sm font-medium hover:text-orange transition-colors">Inspiration</a>
          <a href="#" className="text-sm font-medium hover:text-orange transition-colors">Shop</a>
          <a href="#" className="text-sm font-medium hover:text-orange transition-colors">Blog</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Search size={18} />
          </button>
          <Button className="bg-[#222222] hover:bg-black text-white rounded-full px-6 text-sm">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
