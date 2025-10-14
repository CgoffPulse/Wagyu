import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const bundles = [
  {
    id: 1,
    name: "Grill Master's Bundle",
    description: "Perfect selection for the backyard chef",
    price: "$299.99",
    originalPrice: "$349.99",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop&crop=center",
    includes: ["2 Ribeye Steaks", "2 NY Strip Steaks", "4 Filet Mignon"]
  },
  {
    id: 2,
    name: "Premium Gift Box",
    description: "Luxury presentation for special occasions",
    price: "$449.99",
    originalPrice: "$519.99",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center",
    includes: ["4 Filet Mignon", "2 Porterhouse", "Wagyu Burgers"]
  },
  {
    id: 3,
    name: "Family Feast Pack",
    description: "Feed the whole family with premium cuts",
    price: "$199.99",
    originalPrice: "$239.99",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop&crop=center",
    includes: ["4 NY Strip", "8 Wagyu Burgers", "2 lb Ground Wagyu"]
  },
  {
    id: 4,
    name: "Executive Selection",
    description: "The ultimate luxury experience",
    price: "$799.99",
    originalPrice: "$899.99",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop&crop=center",
    includes: ["6 Filet Mignon", "4 Ribeye", "2 Tomahawk", "Gift Packaging"]
  }
];

export function BundlesGifts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;
  const maxIndex = bundles.length - itemsToShow;

  const next = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-16 bg-luxury-black">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl text-white serif">
            Bundles & Gift Boxes
          </h2>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prev}
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={next}
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {bundles.map((bundle) => (
              <Card key={bundle.id} className="flex-shrink-0 w-full md:w-1/3 bg-luxury-charcoal border-luxury-gold/20">
                <div className="aspect-[4/3] relative">
                  <ImageWithFallback
                    src={bundle.image}
                    alt={bundle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-black px-3 py-1 rounded text-sm">
                    Save ${parseInt(bundle.originalPrice.replace('$', '').replace('.', '')) - parseInt(bundle.price.replace('$', '').replace('.', ''))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl text-white mb-2">{bundle.name}</h3>
                  <p className="text-gray-400 mb-4">{bundle.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-400 block mb-2">Includes:</span>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {bundle.includes.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl text-luxury-gold">{bundle.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{bundle.originalPrice}</span>
                    </div>
                    <Button className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}