import { Heart, Wheat, Users, Truck } from "lucide-react";

const trustPillars = [
  {
    icon: Heart,
    title: "Animal Well-Being First",
    description: "Low-stress handling and daily care"
  },
  {
    icon: Wheat,
    title: "Clean Feed & Slow Aging",
    description: "Patient aging for natural depth"
  },
  {
    icon: Users,
    title: "Family-Raised for 15+ Years",
    description: "Two generations of experience"
  },
  {
    icon: Truck,
    title: "Local Roots, Regional Shipping",
    description: "Ozark-raised, shipped fresh"
  }
];

export function TrustValueBar() {
  return (
    <section className="py-16 bg-luxury-charcoal border-y border-luxury-gold/20">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-luxury-gold" />
                  </div>
                </div>
                <h3 className="text-lg text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}