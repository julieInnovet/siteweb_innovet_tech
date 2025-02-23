import HeroSection from "../components/solutions-page/HeroSection";
import CtaSection from "../components/layout/CtaSection";
import SolutionsSection from "../components/solutions-page/SolutionsSection";

export default function Solutions() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SolutionsSection />
      <CtaSection />
    </div>
  );
}
