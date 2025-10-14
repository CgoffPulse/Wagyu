import React from "react";
import { Card, CardContent } from "../ui/card";
import { ranchPractices } from "./ranchConstants";

export function RanchPracticesSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl serif mb-6">How We Raise Our Cattle</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Our American Wagyu cattle live stress-free lives on over 100 acres of pristine Ozark pastures, with access to clean water, quality feed, and plenty of room to roam.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {ranchPractices.map((practice, index) => {
          const IconComponent = practice.icon;
          return (
            <Card key={index} className="bg-luxury-charcoal border-luxury-gold/20">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mb-6">
                  {React.createElement(IconComponent, { className: "w-8 h-8 text-luxury-black" })}
                </div>
                <h3 className="text-2xl mb-4 text-white">{practice.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {practice.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}