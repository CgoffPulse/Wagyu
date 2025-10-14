import { Droplets, Zap, Clock } from "lucide-react";

const qualityPillars = [
  {
    icon: Droplets,
    title: "Buttery Flavor",
    description: "Rich marbling creates an incredibly buttery taste with notes that develop naturally through our careful raising and aging process."
  },
  {
    icon: Zap,
    title: "Tender Texture", 
    description: "Naturally achieved tenderness through low-stress handling and patient aging—never rushed, always consistent."
  },
  {
    icon: Clock,
    title: "Clean & Slow-Aged",
    description: "Our patient aging process develops depth and complexity while maintaining the clean, pure flavor of premium Wagyu."
  }
];

export function QualityPillars() {
  return (
    <section className="py-16 bg-luxury-charcoal">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4 serif">
            What Premium Means to Us
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {qualityPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-luxury-gold" />
                  </div>
                </div>
                <h3 className="text-2xl text-luxury-gold mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
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