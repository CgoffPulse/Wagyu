import React from "react";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { recipeCategories } from "./recipesConstants";

export function RecipeCategoriesSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Recipe Categories</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Explore our comprehensive collection of recipes, from quick weeknight dinners to special occasion masterpieces.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipeCategories.map((category, index) => (
          <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20 group hover:border-luxury-gold/40 transition-all cursor-pointer">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                  alt={category.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white mb-3">{category.title}</h3>
                <p className="text-white/70 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}