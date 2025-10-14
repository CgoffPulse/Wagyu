import React from "react";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { imageUrls } from "./ranchConstants";

export function RanchHeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={imageUrls.heroBackground}
          alt="Ozark Ranch Landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <Badge className="bg-luxury-gold text-luxury-black px-6 py-2 mb-6">
          Our Story
        </Badge>
        <h1 className="text-5xl md:text-6xl mb-6 tracking-wide serif leading-tight">
          Two Generations of <br />
          <span className="text-luxury-gold">Ozark Heritage</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          From our family to yours, we've been raising premium American Wagyu cattle with love, integrity, and respect for the land that sustains us.
        </p>
      </div>
    </section>
  );
}