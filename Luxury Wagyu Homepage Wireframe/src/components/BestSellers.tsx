import React from "react";
import ribeyeImage from '../assets/Ribeye_generated.png';
import nyStripImage from '../assets/NY_Strip_Generated.png';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const bestSellers = [
  {
    id: 1,
    name: "Ribeye",
    description: "Buttery, tender, clean finish",
    price: "$89.99",
    image: ribeyeImage
  },
  {
    id: 2,
    name: "NY Strip",
    description: "Buttery, tender, clean finish",
    price: "$79.99",
    image: nyStripImage
  },
  {
    id: 3,
    name: "Filet",
    description: "Buttery, tender, clean finish",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=500&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Picanha",
    description: "Buttery, tender, clean finish",
    price: "$69.99",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=500&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Brisket",
    description: "Buttery, tender, clean finish",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=500&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Ground Beef",
    description: "Buttery, tender, clean finish",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=500&fit=crop&crop=center"
  }
];

export function BestSellers() {
  return (
    <section className="py-16 bg-luxury-black">
      <div className="max-w-[1440px] mx-auto px-20">
        <h2 className="text-4xl text-white text-center mb-16 serif">
          Best-Sellers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product) => (
            <Card key={product.id} className="bg-luxury-charcoal border-luxury-gold/20 overflow-hidden">
              <div className="aspect-[4/5] relative">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4 text-sm italic">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-luxury-gold">{product.price}</span>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark"
                    >
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
                    >
                      Cut Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}