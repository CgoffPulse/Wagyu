import { Button } from "../ui/button";
import { MapPin, Users, Handshake } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function LocalCommunitySection() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl serif mb-6">Supporting Local Arkansas Businesses</h2>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            As proud Ozark natives, we believe in strengthening our local community. Our Local Business Alliance offers special pricing and support for Arkansas restaurants and businesses.
          </p>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            From Eureka Springs to Bentonville, we're building partnerships that showcase the best of Arkansas hospitality and cuisine.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-luxury-gold" />
              <span className="text-lg">Priority delivery within 50 miles of our ranch</span>
            </div>
            <div className="flex items-center gap-4">
              <Users className="w-6 h-6 text-luxury-gold" />
              <span className="text-lg">Community event partnerships and sponsorships</span>
            </div>
            <div className="flex items-center gap-4">
              <Handshake className="w-6 h-6 text-luxury-gold" />
              <span className="text-lg">Cross-promotional opportunities</span>
            </div>
          </div>

          <Button 
            onClick={scrollToForm}
            className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark px-8 py-3"
          >
            Join Local Alliance
          </Button>
        </div>
        <div className="relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Local Arkansas restaurant"
            className="rounded-2xl w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}