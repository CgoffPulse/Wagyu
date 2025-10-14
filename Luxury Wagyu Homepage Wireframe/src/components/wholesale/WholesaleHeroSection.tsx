import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function WholesaleHeroSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Professional restaurant kitchen with premium beef preparation"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <Badge className="bg-luxury-gold text-luxury-black px-6 py-2 mb-6">
          Wholesale Partners
        </Badge>
        <h1 className="text-5xl md:text-6xl mb-6 tracking-wide serif leading-tight">
          Premium American Waygu for <br />
          <span className="text-luxury-gold">Exceptional Menus</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Elevate your menu with locally raised American Waygu from Ozark Natural Steak Co. trusted by top chefs across the Ozarks for its consistency, flavor, and ranch-to-table integrity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToForm}
            className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark px-8 py-3"
          >
            Request Pricing
          </Button>
          <Button 
            onClick={scrollToForm}
            className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark px-8 py-3"
          >
            Request Samples
          </Button>
        </div>
      </div>
    </section>
  );
}