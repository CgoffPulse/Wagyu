import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import saltedWagyuImage from "../../assets/Salted_Waygu.png";

export function RecipesHeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={saltedWagyuImage}
          alt="Perfectly seasoned Wagyu steak"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <Badge className="bg-luxury-gold text-luxury-black px-6 py-2 mb-6">
          Recipe Collection
        </Badge>
        <h1 className="text-5xl md:text-6xl mb-6 tracking-wide serif leading-tight">
          Master the Art of <br />
          <span className="text-luxury-gold">Cooking American Wagyu</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover expert techniques, family recipes, and cooking secrets to bring out the extraordinary flavor of our premium American Wagyu beef.
        </p>
        <Button className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark px-8 py-3">
          Browse All Recipes (Coming Soon)
        </Button>
      </div>
    </section>
  );
}