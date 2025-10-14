import { ImageWithFallback } from "../figma/ImageWithFallback";
import { imageUrls } from "./ranchConstants";

export function OzarkDifferenceSection() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <ImageWithFallback
            src={imageUrls.cattleGrazing}
            alt="Cattle grazing in pasture"
            className="rounded-2xl w-full h-auto object-cover"
            style={{ 
              imageRendering: '-webkit-optimize-contrast',
              maxHeight: '500px',
              minHeight: '400px'
            }}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl serif mb-6">The Ozark Difference</h2>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            The Ozark Mountains provide the perfect environment for raising exceptional cattle. Our clean air, pure spring water, and rolling hills create conditions that contribute to the superior quality of our beef.
          </p>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            This natural paradise, combined with our family's generations of farming wisdom and deep respect for the land, produces American Wagyu that truly embodies the essence of premium, authentic beef.
          </p>
        </div>
      </div>
    </section>
  );
}