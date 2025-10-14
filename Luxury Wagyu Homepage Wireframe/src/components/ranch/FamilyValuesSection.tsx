import React from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { familyValues, imageUrls } from "./ranchConstants";

export function FamilyValuesSection() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl serif mb-6">Our Family Values</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            The Smith family has been rooted in the Ozark Mountains for generations. Our commitment to faith, family, and the land guides everything we do. We believe in raising our cattle with the same care and attention we give our own children.
          </p>
          <div className="space-y-4">
            {familyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  {React.createElement(IconComponent, { className: "w-6 h-6 text-luxury-gold" })}
                  <span className="text-lg">{value.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative h-[450px]">
          <ImageWithFallback
            src={imageUrls.familyWorking}
            alt="Smith family horseback riding on the ranch"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}