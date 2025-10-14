import { Button } from "./ui/button";
import { MapPin, Store, ChefHat } from "lucide-react";

interface LocalPrideProps {
  onNavigate?: (page: string) => void;
}

export function LocalPride({ onNavigate }: LocalPrideProps) {
  return (
    <section className="py-16 bg-luxury-charcoal">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white mb-6 serif">
            Rooted in Northwest Arkansas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Proudly raised in the Ozarks, and shipped regionally. We'll always serve local families, restaurants, and community partners first.
          </p>
        </div>

        {/* Local Landmarks Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-luxury-black/50 rounded-lg p-6 text-center">
            <MapPin className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
            <h3 className="text-xl text-white mb-2">Ozark Mountains</h3>
            <p className="text-gray-400">Where it all began</p>
          </div>
          
          <div className="bg-luxury-black/50 rounded-lg p-6 text-center">
            <Store className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
            <h3 className="text-xl text-white mb-2">Local Markets</h3>
            <p className="text-gray-400">Supporting our community</p>
          </div>
          
          <div className="bg-luxury-black/50 rounded-lg p-6 text-center">
            <ChefHat className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
            <h3 className="text-xl text-white mb-2">Regional Restaurants</h3>
            <p className="text-gray-400">Partners in excellence</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8"
            onClick={() => onNavigate?.('local')}
          >
            Find Us Locally
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8"
            onClick={() => onNavigate?.('wholesale')}
          >
            Wholesale & Restaurants
          </Button>
        </div>
      </div>
    </section>
  );
}