import { Card, CardContent } from "../ui/card";
import { cookingTips } from "./recipesConstants";

export function CookingTipsSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Expert Cooking Tips</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Master the fundamentals of cooking American Wagyu with these professional techniques from our culinary partners.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cookingTips.map((tip, index) => {
          const IconComponent = tip.icon;
          return (
            <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-luxury-black" />
                </div>
                <h3 className="text-xl mb-4 text-white">{tip.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}