import HeroSection from "../components/home-page/HeroSection";
import IntroductionSection from "../components/home-page/IntroductionSection";
import ValuesSection from "../components/home-page/ValuesSection";
import BenefitsSection from "../components/home-page/BenefitsSection";
import Separator from "../components/layout/Separator";
import CtaSection from "../components/layout/CtaSection";
import SolutionsSection from "../components/home-page/SolutionsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <IntroductionSection />
      <Separator />
      <SolutionsSection />
      <Separator />
      <ValuesSection />
      <Separator />
      <BenefitsSection />
      <CtaSection />
    </div>
  );
}
