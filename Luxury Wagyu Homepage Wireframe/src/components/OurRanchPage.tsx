import { RanchHeroSection } from "./ranch/RanchHeroSection";
import { RanchVideoSection } from "./ranch/RanchVideoSection";
import { FamilyValuesSection } from "./ranch/FamilyValuesSection";
import { RanchPracticesSection } from "./ranch/RanchPracticesSection";
import { OzarkDifferenceSection } from "./ranch/OzarkDifferenceSection";
import { FamilyMottoSection } from "./ranch/FamilyMottoSection";

export default function OurRanchPage() {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <RanchHeroSection />
      
      <div className="max-w-[1440px] mx-auto px-20">
        <RanchVideoSection />
        <FamilyValuesSection />
        <RanchPracticesSection />
        <OzarkDifferenceSection />
        <FamilyMottoSection />
      </div>
    </div>
  );
}