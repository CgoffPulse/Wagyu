import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { localPartners } from "./localConstants";
import honeywheatImage from "../../assets/Honeywheat-Bakery-featured-image.webp";
import fairmountImage from "../../assets/Fairmount_Farm_Market.webp";

export function LocalPartnersSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Find Us Locally</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Bring home Ozark Natural Steak Co. American Waygu from select partners across Northwest Arkansas. Our community collaborations make it easy to pick up premium, ranch-raised beef close to home.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {localPartners.map((partner, index) => (
          <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20 group hover:border-luxury-gold/40 transition-all">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <ImageWithFallback
                  src={partner.name === "Honeywheat" ? honeywheatImage : fairmountImage}
                  alt={partner.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-luxury-gold text-luxury-black">
                    {partner.type}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-white">{partner.name}</h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {partner.description}
                </p>
                <div className="bg-luxury-black/30 rounded-lg p-4 mb-6">
                  <h4 className="text-luxury-gold mb-2">Community Impact</h4>
                  <p className="text-white/90">{partner.impact}</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
                  onClick={() => {
                    if (partner.name === "Honeywheat") {
                      window.open('https://www.facebook.com/honeywheatbakery/', '_blank');
                    } else {
                      window.open('https://www.facebook.com/p/Fairmount-Farm-Market-61578416047530/', '_blank');
                    }
                  }}
                >
                  Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}