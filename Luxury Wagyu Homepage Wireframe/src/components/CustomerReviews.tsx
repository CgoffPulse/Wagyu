import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "Absolutely incredible steaks! The marbling was perfect and the flavor was unlike anything I've had before. Worth every penny.",
    author: "Sarah M.",
    location: "Dallas, TX"
  },
  {
    id: 2,
    text: "The family feast pack was a hit at our barbecue. Everyone kept asking where we got such amazing beef. Will definitely order again!",
    author: "Michael R.",
    location: "Denver, CO"
  },
  {
    id: 3,
    text: "Ordered the executive selection for our anniversary dinner. The presentation and quality exceeded our expectations. Simply divine.",
    author: "Jennifer L.",
    location: "Chicago, IL"
  },
  {
    id: 4,
    text: "As a chef, I'm very particular about my ingredients. Ozark's Wagyu is restaurant-quality and arrives perfectly packaged.",
    author: "Chef David K.",
    location: "Miami, FL"
  }
];

export function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-luxury-charcoal to-luxury-black">
      <div className="max-w-[1440px] mx-auto px-20 text-center">
        <h2 className="text-4xl text-white mb-16 serif">
          What Our Customers Say
        </h2>
        
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
                  
                  <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
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