import { WholesaleHeroSection } from "./wholesale/WholesaleHeroSection";
import { WholesaleBenefitsSection } from "./wholesale/WholesaleBenefitsSection";
import { ProductOfferingsSection } from "./wholesale/ProductOfferingsSection";
import { LocalCommunitySection } from "./wholesale/LocalCommunitySection";
import { WholesaleTestimonialsSection } from "./wholesale/WholesaleTestimonialsSection";
import { ContactInquirySection } from "./wholesale/ContactInquirySection";

// Wholesale partnerships page
export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-luxury-black text-white">
      <WholesaleHeroSection />
      
      <div className="max-w-[1440px] mx-auto px-20">
        <WholesaleBenefitsSection />
        <ProductOfferingsSection />
        <LocalCommunitySection />
        <WholesaleTestimonialsSection />
        <ContactInquirySection />
      </div>
    </div>
  );
}