import React from "react";
import { Button } from "./ui/button";
import familyPhoto from "../assets/Smith_Family_Gate.jpg";

interface FamilyIntroductionProps {
  onNavigate?: (page: string) => void;
}

export function FamilyIntroduction({ onNavigate }: FamilyIntroductionProps) {
  return (
    <section className="py-16 bg-luxury-black">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Family Photo */}
          <div className="aspect-video">
            <img
              src={familyPhoto}
              alt="Dustin, Denise, Sawyer, and Kenley - The Family Behind Ozark Natural Steak Co."
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Family Story Content */}
          <div>
            <h2 className="text-4xl text-white mb-8 serif">
              The Family Behind the Beef
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                For over 20 years, Dustin, Denise, Sawyer, and Kenley Smith have put animal well-being first—raising cattle with care to deliver steaks that exceed expectations.
              </p>
              <p>
                What started with grit and stewardship has grown into a full cattle operation, then a commercial beef business, and eventually Ozark Natural Steak Co.
              </p>
              <p>
                We believe great beef starts with stewardship, low-stress handling, clean feed, and the patience to do it right. Every decision is made with the animals' well-being in mind.
              </p>
              <p className="italic text-luxury-warm-beige">
                "Grateful for the land, the cattle, and the families we serve."
              </p>
            </div>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="mt-8 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8"
              onClick={() => onNavigate?.('our-ranch')}
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}