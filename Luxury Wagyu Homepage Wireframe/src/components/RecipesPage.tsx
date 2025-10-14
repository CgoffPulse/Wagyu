import { RecipesHeroSection } from "./recipes/RecipesHeroSection";
import { CookingEducationSection } from "./recipes/CookingEducationSection";
import { RecipeCategoriesSection } from "./recipes/RecipeCategoriesSection";
import { FeaturedRecipesSection } from "./recipes/FeaturedRecipesSection";
import { CookingTipsSection } from "./recipes/CookingTipsSection";
import { FamilyRecipesSection } from "./recipes/FamilyRecipesSection";

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <RecipesHeroSection />
      
      <div className="max-w-[1440px] mx-auto px-20">
        <CookingEducationSection />
        <RecipeCategoriesSection />
        <FeaturedRecipesSection />
        <CookingTipsSection />
        <FamilyRecipesSection />
      </div>
    </div>
  );
}