import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import whyFayettevilleImage from "../../assets/WhyFayetteville-InLine-Landscape.jpg";

export function LocalHeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={whyFayettevilleImage}
          alt="Fayetteville Arkansas community"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <Badge className="bg-luxury-gold text-luxury-black px-6 py-2 mb-6">
          Local Community
        </Badge>
        <h1 className="text-5xl md:text-6xl mb-6 tracking-wide serif leading-tight">
          Proudly Serving Our <br />
          <span className="text-luxury-gold">Arkansas Community</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          From local restaurants to community events, discover how Ozark Natural Steaks is woven into the fabric of Arkansas hospitality and cuisine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark px-8 py-3">
            Find Us Locally
          </Button>
          <Button className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark px-8 py-3">
            Visit Our Ranch
          </Button>
        </div>
      </div>
    </section>
  );
}