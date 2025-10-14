import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import wagyuCattleImage from "../assets/Black_Red_Wayguy (1).jpg";

export function WhatIsAmericanWagyu() {
  return (
    <section className="py-16 bg-luxury-black">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] relative">
              <ImageWithFallback
                src={wagyuCattleImage}
                alt="American Wagyu cattle showing the heritage and quality of Ozark Natural Steak Co."
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl text-white mb-6 serif">
              What is American Wagyu?
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                American Wagyu is the perfect blend of Japanese heritage and American craftsmanship. It comes from cattle bred from Japanese Wagyu genetics — prized for their intricate marbling and unmatched tenderness — and raised on U.S. ranches with the care, space, and natural diet that define American ranching traditions.
              </p>
              
              <p>
                The result is a steak that combines the luxurious texture of Japanese Wagyu with the bold, hearty flavor of premium American beef. At Ozark Natural Steak Co., our Wagyu is raised locally in Arkansas pastures, free from added hormones, and finished on a natural feed program to develop its signature marbling and buttery richness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
