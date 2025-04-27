import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="pt-16 pb-6 bg-yellow-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange text-2xl">✈</span>
              <span className="font-bold text-xl tracking-tight">GLOBE TREKKER</span>
            </div>
            <p className="text-gray-500 mb-6 text-sm">
              Follow us on
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-500 hover:text-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">About Globe Trekker</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Contact us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Terms and Conditions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Work with Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Cookie Settings</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Travel Interests</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Family Vacation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Adventure</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Art and Culture</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Wildlife and Nature</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Travel on a Budget</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Top Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Paris</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Italy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Tokyo</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">London</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">New York City</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Los Angeles</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Scotland</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Guidebooks Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Destination Guide</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Photography Books</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Maps Guides</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Shopping Guides</a></li>
              <li><a href="#" className="text-gray-500 hover:text-orange transition-colors">Kids Travel Guides</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            © {currentYear} Globe Trekker | Designed with ❤️ for Travelers Around the World
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;