import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Clock, Users, ChefHat } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { featuredRecipes } from "./recipesConstants";
import ribeyeImage from "../../assets/Ribeye_generated.png";

export function FeaturedRecipesSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Featured Recipes</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Start your culinary journey with these carefully selected recipes that showcase the exceptional quality of our American Wagyu.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {featuredRecipes.map((recipe, index) => {
          const getRecipeImage = (index: number) => {
            const images = [
              ribeyeImage,
              "https://images.unsplash.com/photo-1709230552433-6c5be48e2e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwcG90JTIwcm9hc3QlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc1NTg3MjAzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwcHJlbWl1bSUyMGJlZWZ8ZW58MXx8fHwxNzU1ODcyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            ];
            return images[index] || images[0];
          };

          return (
            <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20 group hover:border-luxury-gold/40 transition-all">
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <ImageWithFallback
                  src={getRecipeImage(index)}
                  alt={recipe.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-luxury-gold text-luxury-black">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-white">{recipe.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {recipe.description}
                </p>
                
                <div className="flex items-center gap-6 mb-6 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.cookTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{recipe.serves}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChefHat className="w-4 h-4" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
                >
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>
          );
        })}
      </div>
    </section>
  );
}