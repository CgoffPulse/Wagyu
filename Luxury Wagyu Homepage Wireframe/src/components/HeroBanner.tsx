import { Button } from "./ui/button";
import ranchLandscapeImage from "../assets/f3fb4a3b505ecf34445bded739246740dc4df60b.png";

interface HeroBannerProps {
  onNavigate?: (page: string) => void;
}

export function HeroBanner({ onNavigate }: HeroBannerProps) {
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ranchLandscapeImage}
          alt="Ozark Ranch Landscape at Sunset"
          className="w-full h-full object-cover object-center"
        />
      </div>



      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-wide serif leading-tight" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)' }}>
          Premium American Wagyu, Raised Right in the Ozarks
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 mx-auto leading-relaxed md:whitespace-nowrap" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.6)' }}>
          Buttery flavor, tender texture, and clean, slow-aged beef, crafted by a family who puts animal well-being first.
        </p>
        
        <div className="flex justify-center items-center">
          <Button 
            size="lg" 
            className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark px-12 py-4 text-lg"
            onClick={() => onNavigate?.('our-ranch')}
          >
            Meet the Family
          </Button>
        </div>
      </div>
    </section>
  );
}