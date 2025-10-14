import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { featuredRestaurants } from "./localConstants";
import chefImage from "../../assets/Conifer_Mathew.jpg";

export function FeaturedRestaurantsSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Where to Find Our Beef</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Experience our premium American Wagyu at these exceptional Arkansas restaurants, each showcasing our beef in their own unique style.
        </p>
      </div>

      <div className="space-y-12">
        {featuredRestaurants.map((restaurant, index) => (
          <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20 overflow-hidden">
            <CardContent className="p-0">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ImageWithFallback
                    src={chefImage}
                    alt={restaurant.image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-luxury-gold text-luxury-black">
                      {restaurant.partnership} Partner
                    </Badge>
                  </div>
                </div>
                
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-luxury-gold" />
                    <span className="text-luxury-gold">{restaurant.location}</span>
                    <Badge variant="secondary" className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30 ml-2">
                      {restaurant.cuisine}
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl mb-4 text-white">{restaurant.name}</h3>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    {restaurant.description}
                  </p>
                  
                  <div className="bg-luxury-black/30 rounded-lg p-4 mb-6">
                    <h4 className="text-luxury-gold mb-2">Signature Dish</h4>
                    <p className="text-white/90 text-lg">{restaurant.signature}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-luxury-gold" />
                      <span className="text-sm text-white/70">Specialty: {restaurant.specialty}</span>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-luxury-gold pl-4 mb-6">
                    <p className="text-white/90 italic mb-2">"{restaurant.chefQuote}"</p>
                    <cite className="text-luxury-gold">— {restaurant.chef}</cite>
                  </blockquote>
                  
                  <Button 
                    variant="outline" 
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black w-fit"
                    onClick={() => window.open('https://www.coniferbentonville.com/', '_blank')}
                  >
                    Visit Restaurant
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}