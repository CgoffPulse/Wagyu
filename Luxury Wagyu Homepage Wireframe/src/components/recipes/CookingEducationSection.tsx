import { ImageWithFallback } from "../figma/ImageWithFallback";
import seasonedWagyuImage from "../../assets/3b153e022e59308a4ba355e1a2cab0d9ed93a00f.png";

export function CookingEducationSection() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl serif mb-6">Why American Wagyu is Different</h2>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            American Wagyu's exceptional marbling means it cooks differently than conventional beef. The intramuscular fat creates incredible tenderness and flavor that requires special techniques to showcase properly.
          </p>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            Our recipes are designed specifically for the unique characteristics of American Wagyu, ensuring you get the most out of every premium cut.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-luxury-gold rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="text-lg mb-2">Rich Marbling</h4>
                <p className="text-white/70">Higher fat content means lower cooking temperatures and shorter cooking times</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-luxury-gold rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="text-lg mb-2">Enhanced Flavor</h4>
                <p className="text-white/70">The buttery taste profile pairs beautifully with simple, complementary seasonings</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-luxury-gold rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="text-lg mb-2">Superior Tenderness</h4>
                <p className="text-white/70">Requires gentle handling and precise temperature control for optimal results</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <ImageWithFallback
            src={seasonedWagyuImage}
            alt="Premium seasoned Wagyu steak with herbs and spices"
            className="rounded-2xl w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}