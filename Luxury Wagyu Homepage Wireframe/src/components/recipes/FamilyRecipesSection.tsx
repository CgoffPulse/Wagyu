import React from "react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import smithFamilyImage from "../../assets/Smith_Family_Dinner.jpg";

export function FamilyRecipesSection() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <ImageWithFallback
            src={smithFamilyImage}
            alt="Multi-generational Smith family sharing a meal around the dinner table"
            className="rounded-2xl w-full h-[500px] object-cover object-center"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl serif mb-6">Family Heritage Recipes</h2>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            For generations, the Smith family has perfected these time-honored recipes, each one designed to showcase the exceptional quality of our American Wagyu beef.
          </p>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            From Sunday roasts that bring the family together to quick weeknight favorites that never compromise on flavor, these recipes carry our family's legacy of excellence.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
              <span className="text-lg">Smith family Smoked Wagyu Roast</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
              <span className="text-lg">Dad's Famous Grilled Ribeye</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
              <span className="text-lg">Mom's Comfort Beef Stew</span>
            </div>
          </div>
          <Button className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark px-8 py-3">
            View Family Collection (Coming Soon)
          </Button>
        </div>
      </div>
    </section>
  );
}