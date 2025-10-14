import { Card, CardContent } from "../ui/card";
import { communityImpact } from "./localConstants";

export function CommunityImpactSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Our Community Impact</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          As a family business rooted in Arkansas, we're committed to strengthening our local community through partnerships.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {communityImpact.map((impact, index) => {
          const IconComponent = impact.icon;
          return (
            <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-luxury-black" />
                </div>
                <div className="text-4xl text-luxury-gold mb-2">{impact.stat}</div>
                <h3 className="text-xl mb-3 text-white">{impact.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}