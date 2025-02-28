import HeroSection from "../components/pricing-page/HeroSection";
import FeaturesSection from "../components/pricing-page/FeaturesSection";
import PricingSection from "../components/pricing-page/PricingSection";
import Separator from "../components/layout/Separator";
import CtaSection from "../components/layout/CtaSection";
import FAQSection from "../components/pricing-page/FAQSection";

export default function Pricing() {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <Separator />
      <FeaturesSection />
      <Separator />
      <FAQSection />
      <CtaSection />
    </>
  );
}
