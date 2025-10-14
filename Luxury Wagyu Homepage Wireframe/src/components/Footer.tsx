import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const quickLinks = [
    { label: "Our Ranch", page: "our-ranch" },
    { label: "Recipes", page: "recipes" },
    { label: "Wholesale", page: "wholesale" },
    { label: "Local", page: "local" }
  ];

  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/20 py-16">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-luxury-gold text-xl mb-6 serif">
              Ozark Natural Steaks Co.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium American Wagyu beef from our family ranch to your table. Three generations of excellence in sustainable farming.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => setCurrentPage(link.page)}
                    className="text-gray-400 hover:text-luxury-gold transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Wholesale Inquiries */}
          <div>
            <h4 className="text-white text-lg mb-6">Partner With Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Interested in offering premium American Wagyu to your customers?
            </p>
            <Button 
              onClick={() => setCurrentPage("wholesale")}
              className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90 transition-colors"
            >
              Wholesale Inquiries
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Customer Service</p>
                  <p className="text-white text-sm">1-800-WAGYU-BEEF</p>
                  <p className="text-gray-400 text-xs">Mon-Fri 8AM-6PM CST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email Support</p>
                  <p className="text-white text-sm">hello@ozarksteaks.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Ranch Location</p>
                  <p className="text-white text-sm">Ozark Mountains, Arkansas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-luxury-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ozark Natural Steaks Co. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-luxury-gold text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-luxury-gold text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}