import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const featuredProducts = [
  {
    id: 1,
    name: "Ribeye Steak",
    description: "Marbled perfection with rich, buttery flavor",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=500&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Filet Mignon",
    description: "Tender and lean, the most prized cut",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=500&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "New York Strip",
    description: "Bold flavor with perfect marbling",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=500&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Porterhouse",
    description: "The king of steaks, strip and tenderloin",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=500&fit=crop&crop=center"
  }
];

export function FeaturedCuts() {
  return (
    <section className="py-16 bg-luxury-black">
      <div className="max-w-[1440px] mx-auto px-20">
        <h2 className="text-4xl text-white text-center mb-16 serif">
          Featured Cuts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
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
                <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-luxury-gold">{product.price}</span>
                  <Button 
                    size="sm" 
                    className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}