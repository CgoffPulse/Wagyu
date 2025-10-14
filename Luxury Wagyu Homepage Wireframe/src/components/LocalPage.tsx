import { LocalHeroSection } from "./local/LocalHeroSection";
import { FeaturedRestaurantsSection } from "./local/FeaturedRestaurantsSection";
import { LocalPartnersSection } from "./local/LocalPartnersSection";
import { LocalTestimonialsSection } from "./local/LocalTestimonialsSection";
import { FindUsLocallySection } from "./local/FindUsLocallySection";

export default function LocalPage() {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <LocalHeroSection />
      
      <div className="max-w-[1440px] mx-auto px-20">
        <FeaturedRestaurantsSection />
        <LocalPartnersSection />
        <LocalTestimonialsSection />
        <FindUsLocallySection />
      </div>
    </div>
  );
}