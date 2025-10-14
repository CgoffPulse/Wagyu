import { Button } from "./ui/button";
import cattleImage from "../assets/ea946aa5b09716ca32e664e8aa57420d3163b3b4.png";

export function RanchStory() {
  return (
    <section className="py-16 bg-luxury-charcoal">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Ranch Photo */}
          <div className="aspect-video">
            <img
              src={cattleImage}
              alt="Premium Wagyu Cattle at Ozark Ranch"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Ranch Story Content */}
          <div>
            <h2 className="text-4xl text-white mb-8 serif">
              From Our Ranch
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Nestled in the heart of the Ozark Mountains, our family ranch has been raising premium American Wagyu cattle for over three generations.
              </p>
              <p>
                We believe in sustainable farming practices and ethical treatment of our cattle, resulting in the finest marbled beef with unmatched flavor and tenderness.
              </p>
              <p>
                Every cut is hand-selected and dry-aged to perfection, ensuring you receive only the highest quality steaks delivered fresh to your door.
              </p>
              <p>
                Experience the difference that comes from passion, tradition, and an unwavering commitment to excellence.
              </p>
            </div>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="mt-8 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
            >
              Learn More About Our Ranch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}