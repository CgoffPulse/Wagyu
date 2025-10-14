import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "The quality exceeded our expectations. You can taste the care that goes into raising these cattle. Our family dinner was unforgettable.",
    author: "Sarah M.",
    location: "Fayetteville, AR"
  },
  {
    id: 2,
    text: "As local restaurant owners, we've tried many suppliers. Ozark Natural consistently delivers premium quality with a personal touch.",
    author: "Chef Michael R.",
    location: "Bentonville, AR"
  },
  {
    id: 3,
    text: "Ordered for our anniversary and it was restaurant-quality at home. The buttery flavor and tenderness were exactly as promised.",
    author: "Jennifer & David L.",
    location: "Rogers, AR"
  },
  {
    id: 4,
    text: "Supporting a local family business that truly cares about their craft. The difference in quality is remarkable—you won't go back to store-bought.",
    author: "The Johnson Family",
    location: "Springdale, AR"
  }
];

export function ReviewsTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-luxury-black">
      <div className="max-w-[1440px] mx-auto px-20 text-center">
        <h2 className="text-4xl text-white mb-8 serif">
          More Than Expected
        </h2>
        
        {/* Family Motto */}
        <div className="mb-16">
          <Quote className="h-8 w-8 text-luxury-gold mx-auto mb-4" />
          <blockquote className="text-2xl text-luxury-gold italic mb-4">
            "Giving people more than they expect."
          </blockquote>
          <p className="text-gray-400">— Family Motto</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-8">
                  {/* Star Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                    "{review.text}"
                  </blockquote>
                  
                  <div className="text-luxury-gold">
                    <p className="text-lg mb-1">{review.author}</p>
                    <p className="text-sm text-gray-400">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index 
                    ? "bg-luxury-gold scale-125" 
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}