import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { partnershipPrograms } from "./wholesaleConstants";

export function PartnershipProgramsSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">Partnership Programs</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Choose the partnership level that fits your business needs. Each program offers unique benefits designed to help you succeed.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {partnershipPrograms.map((program, index) => (
          <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20 relative">
            <CardContent className="p-8">
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-luxury-gold text-luxury-black px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-3 text-white">{program.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {program.description}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {program.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <Badge variant="secondary" className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30">
                  {program.commitment}
                </Badge>
              </div>

              <Button 
                className={`w-full ${
                  index === 1 
                    ? "bg-luxury-gold text-luxury-black hover:bg-luxury-gold-dark" 
                    : "border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
                }`}
                variant={index === 1 ? "default" : "outline"}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}