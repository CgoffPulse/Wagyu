import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/Ozark_Natural_Steak_Co_Logo_no_Background.png";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount] = useState(3); // Mock cart count

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-luxury-black/90 backdrop-blur-sm border-b border-luxury-gold/20" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setCurrentPage("home")}>
            <img 
              src={logo} 
              alt="Ozark Natural Steak Co." 
              className="h-20 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setCurrentPage("our-ranch")}
              className={`transition-colors ${
                currentPage === "our-ranch" 
                  ? "text-luxury-gold" 
                  : "text-white hover:text-luxury-gold"
              }`}
            >
              Our Ranch
            </button>
            <button 
              onClick={() => setCurrentPage("recipes")}
              className={`transition-colors ${
                currentPage === "recipes" 
                  ? "text-luxury-gold" 
                  : "text-white hover:text-luxury-gold"
              }`}
            >
              Recipes
            </button>
            <button 
              onClick={() => setCurrentPage("wholesale")}
              className={`transition-colors ${
                currentPage === "wholesale" 
                  ? "text-luxury-gold" 
                  : "text-white hover:text-luxury-gold"
              }`}
            >
              Wholesale
            </button>
            <button 
              onClick={() => setCurrentPage("local")}
              className={`transition-colors ${
                currentPage === "local" 
                  ? "text-luxury-gold" 
                  : "text-white hover:text-luxury-gold"
              }`}
            >
              Local
            </button>
            <button 
              disabled 
              className="text-white cursor-not-allowed transition-colors"
            >
              Order Now (Coming Soon)
            </button>
            
            {/* Cart - Hidden until e-commerce is live */}
            <Button variant="ghost" className="relative p-2 text-white hover:text-luxury-gold">
              <ShoppingCart className="h-6 w-6" />
              {/* Cart count hidden until e-commerce is live */}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}