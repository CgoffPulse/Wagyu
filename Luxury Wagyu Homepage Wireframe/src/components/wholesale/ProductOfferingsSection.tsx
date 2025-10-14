import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { productOfferings } from "./wholesaleConstants";

export function ProductOfferingsSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Wholesale Product Catalog</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          From premium steaks to ground beef and specialty cuts, we offer everything you need to create exceptional dishes that keep customers coming back.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {productOfferings.map((offering, index) => {
          const getOfferingImage = (index: number) => {
            const images = [
              "https://images.unsplash.com/photo-1714579328738-c882ca3d7fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmVlZiUyMHN0ZWFrcyUyMHJlc3RhdXJhbnQlMjBwbGF0ZXxlbnwxfHx8fDE3NTU4NzI0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1637771622300-6f968a373415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwaGFtYnVyZ2VyJTIwcmVzdGF1cmFudCUyMGtpdGNoZW58ZW58MXx8fHwxNzU1ODcyNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1628497622768-78d74888e965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwcm9hc3QlMjBwcm9mZXNzaW9uYWwlMjBraXRjaGVuJTIwY2hlZnxlbnwxfHx8fDE3NTU4NzI1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            ];
            return images[index] || images[0];
          };

          return (
            <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <ImageWithFallback
                  src={getOfferingImage(index)}
                  alt={offering.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-4 text-white">{offering.category}</h3>
                <div className="space-y-2 mb-6">
                  {offering.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={scrollToForm}
                  variant="outline" 
                  className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
                >
                  Request Quote
                </Button>
              </div>
            </CardContent>
          </Card>
          );
        })}
      </div>
    </section>
  );
}