import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroBanner } from "./components/HeroBanner";
import { TrustValueBar } from "./components/TrustValueBar";
// import { BestSellers } from "./components/BestSellers"; // Hidden until e-commerce is ready
import { WhatIsAmericanWagyu } from "./components/WhatIsAmericanWagyu";
import { QualityPillars } from "./components/QualityPillars";
import { FamilyIntroduction } from "./components/FamilyIntroduction";
import { LocalPride } from "./components/LocalPride";
import { ReviewsTestimonials } from "./components/ReviewsTestimonials";
import { EmailCapture } from "./components/EmailCapture";
import { Footer } from "./components/Footer";
import { withLazyLoad } from "./components/LazyLoad";

// Lazy load page components
const OurRanchPage = withLazyLoad(() => import("./components/OurRanchPage"));
const RecipesPage = withLazyLoad(() => import("./components/RecipesPage"));
const WholesalePage = withLazyLoad(() => import("./components/WholesalePage"));
const LocalPage = withLazyLoad(() => import("./components/LocalPage"));

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "our-ranch":
        return <OurRanchPage />;
      case "recipes":
        return <RecipesPage />;
      case "wholesale":
        return <WholesalePage />;
      case "local":
        return <LocalPage />;
      default:
        return (
          <>
            {/* Hero Banner */}
            <HeroBanner onNavigate={setCurrentPage} />
            
            {/* Trust/Value Bar */}
            <TrustValueBar />
            
            {/* Main Content Sections with consistent spacing */}
            <main className="space-y-16">
              {/* <BestSellers /> - Hidden until e-commerce is ready */}
              <WhatIsAmericanWagyu />
              <QualityPillars />
              <FamilyIntroduction onNavigate={setCurrentPage} />
              <LocalPride onNavigate={setCurrentPage} />
              <ReviewsTestimonials />
              <EmailCapture />
            </main>
          </>
        );
    }
  };

  return (
    <div className="dark min-h-screen bg-luxury-black">
      {/* Sticky Navigation */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {renderPage()}
      
      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}